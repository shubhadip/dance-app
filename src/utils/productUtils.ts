import { addDays, format, isToday, subDays } from "date-fns";
import { timeSlotMapping } from "./constants"

export const getFilteredProducts = (data: any, selectedSlot: any, selectedDate: any, selectedCategory: any, selectedSort: any) => {
  let prod: any = [];

  if (selectedCategory) {
    const category = data.filter((catItem: any) => catItem.product_category === selectedCategory.category);
    prod = category[0].products;
    prod = prod.map((p: any)=>{
      p["product_category"] = category[0].product_category
      p["product_category_name"]= category[0].product_category_name
      p["product_cat_image_url"]= category[0].product_cat_image_url
      p["product_category_id"]= category[0].product_category_id
      return {
        ...p
      }
    })
    
  } else {
    data.forEach((catItem: any) => {
      catItem.products.map((p: any)=>{
        p["product_category"] = catItem.product_category
        p["product_category_name"]= catItem.product_category_name
        p["product_cat_image_url"]= catItem.product_cat_image_url
        p["product_category_id"]= catItem.product_category_id
        return {
          ...p
        }
      })
      prod = [...prod, ...catItem.products]
    })
  }
  if (!selectedCategory && !selectedDate) {
    let tempAllProducts: any = []
    prod.forEach((p: any)=>{
      p.selectedBatch = null;
      for (let index = 1; index <= 7; index++) {
        const tempDate = format(addDays(new Date(), index), 'yyyy-MM-dd')
        p.selectedBatch = null;
        const temp = p.slots[tempDate] && p.slots[tempDate].slotTimings 
        
        const slotLength = (timeSlotMapping as any)[selectedSlot?.value]
        const minslotTime = slotLength ? (timeSlotMapping as any)[selectedSlot?.value][0]: null
        const maxslotTime = slotLength ? (timeSlotMapping as any)[selectedSlot?.value][slotLength.length-1]: null
        const minSlotTimeStamp = minslotTime ? new Date(`${tempDate} ${minslotTime}:00:00`).getTime(): null
        const maxSlotTimeStamp = maxslotTime ? new Date(`${tempDate} ${maxslotTime}:00:00`).getTime(): null
        
        if(temp){
          const massageddata = temp.map((t: any) => {
            const startTime = t.startTime.split(':')
            const hr = `0${startTime[0]}`.slice(-2)
            const min = `0${startTime[1]}`.slice(-2)
            const endHr = t.endTime.split(':')[0]
            const startTimeStamp = new Date(`${tempDate} ${hr}:${min}:00`).getTime()
            const slotText = `${t.startTime} ${Number(hr) > 12 && Number(hr) < 24 ? 'PM' :'AM'} - ${t.endTime} ${Number(endHr) > 12 && Number(endHr) < 24 ? 'PM' :'AM'}`
            const currentTimestamp = new Date(`${tempDate} ${isToday(new Date(tempDate)) ? (new Date()).getHours() : '00'}:00:00`).getTime()
            return {
              ...t,
              date: format(new Date(tempDate), 'd LLL'),
              startTimeStamp,
              slotText,
              isValid: slotLength ? startTimeStamp > (minSlotTimeStamp as number) && startTimeStamp < (maxSlotTimeStamp as number) : startTimeStamp > currentTimestamp
            }
          })
          p.selectedBatch = massageddata.filter((a:any) => a.isValid).sort((a:any, b:any) => a.startTimeStamp - b.startTimeStamp)[0];
          p.slots[tempDate].slotTimings = massageddata
          tempAllProducts =[...tempAllProducts, {...p}];
        }
      }
    })
    prod = [...tempAllProducts]
  }else if (selectedDate && !selectedSlot) {
    prod.forEach((p: any)=>{
      p.selectedBatch = null;
      const temp = p.slots[selectedDate.value] && p.slots[selectedDate.value].slotTimings 
      if(temp){
        const massageddata = temp.map((t: any) => {
          const startTime = t.startTime.split(':')
          const hr = `0${startTime[0]}`.slice(-2)
          const min = `0${startTime[1]}`.slice(-2)
          const endHr = t.endTime.split(':')[0]
          const startTimeStamp = new Date(`${selectedDate.value} ${hr}:${min}:00`).getTime()
          const slotText = `${t.startTime} ${Number(hr) > 12 && Number(hr) < 24 ? 'PM' :'AM'} - ${t.endTime} ${Number(endHr) > 12 && Number(endHr) < 24 ? 'PM' :'AM'}`
          const currentTimestamp = new Date(`${selectedDate.value} ${isToday(new Date(selectedDate.value)) ? (new Date()).getHours() : '00'}:00:00`).getTime()
          return {
            ...t,
            date: format(new Date(selectedDate.value), 'd LLL'),
            startTimeStamp,
            slotText,
            isValid: startTimeStamp > currentTimestamp
          }
        })
        p.selectedBatch = massageddata.filter((a:any) => a.isValid).sort((a:any, b:any) => a.startTimeStamp - b.startTimeStamp)[0];
        p.slots[selectedDate.value].slotTimings = massageddata
      }
    })
  } else if (selectedSlot && selectedDate) {
    const slotLength = (timeSlotMapping as any)[selectedSlot?.value]
    const minslotTime = (timeSlotMapping as any)[selectedSlot?.value][0]
    const maxslotTime = (timeSlotMapping as any)[selectedSlot?.value][slotLength.length-1]
    const minSlotTimeStamp = new Date(`${selectedDate.value} ${minslotTime}:00:00`).getTime()
    const maxSlotTimeStamp = new Date(`${selectedDate.value} ${maxslotTime}:00:00`).getTime()
    
    prod.forEach((p: any)=>{
      p.selectedBatch = null;
      const temp = p.slots[selectedDate.value] && p.slots[selectedDate.value].slotTimings 
      if(temp){
        const massageddata = temp.map((t: any) => {
          const startTime = t.startTime.split(':')
          const hr = `0${startTime[0]}`.slice(-2)
          const min = `0${startTime[1]}`.slice(-2)
          const startTimeStamp = new Date(`${selectedDate.value} ${hr}:${min}:00`).getTime()
          const slotText = `${t.startTime} - ${t.endTime}`
          if(isToday(new Date(selectedDate.value))){
            return {
              ...t,
              date: format(new Date(selectedDate.value), 'd LLL'),
              startTimeStamp,
              slotText,
              isValid: (startTimeStamp > minSlotTimeStamp && startTimeStamp < maxSlotTimeStamp) && (startTimeStamp > (new Date()).getTime())
            }
          }else{
            return {
              ...t,
              date: format(new Date(selectedDate.value), 'd LLL'),
              startTimeStamp,
              slotText,
              isValid: startTimeStamp > minSlotTimeStamp && startTimeStamp < maxSlotTimeStamp
            }
          }
        })
        p.selectedBatch = massageddata.filter((a:any) => a.isValid).sort((a:any, b:any) => a.startTimeStamp - b.startTimeStamp)[0];
        p.slots[selectedDate.value].slotTimings = massageddata
      }
    })
  }
  if (selectedSort) {
    prod.sort((a: any, b: any) => {
      if (selectedSort.value === 0) {
        return a.discounted_price - b.discounted_price
      } else {
        return b.discounted_price - a.discounted_price
      }
    })
  }
  prod = prod.filter((p: any) => !!p.selectedBatch)
  return prod;
}

export const getAllCategories = (data: any) => {
  return data.map((item: any) => {
    return {
      category: item.product_category,
      name: item.product_category_name,
      image: item.product_cat_image_url,
    }
  })
}

export const getUniqueDateOptions = (data?: any) => {
  let prod: any = [];
  let slotItems: any = [];
  data.forEach((catItem: any) => {
    prod = [...prod, ...catItem.products]
  });
  prod.forEach((slotItem: any) => {
    slotItems = [...slotItems, ...(Object.keys(slotItem.slots))]
  });
  const uniques = slotItems.filter((v: any, i: any, a: any) => a.indexOf(v) === i);
  return (uniques || []).map((item: any) => {
    return {
      value: item,
      label: item
    }
  })
  .sort((a: any, b: any) => (new Date(a.value)).getTime() - (new Date(b.value)).getTime())
  .filter((item: any) => {
    return new Date(item.value) >= subDays(new Date(), 1);
  })
  .filter((item: any, index: number) => {
    return index < 7;
  })
  
}

export const getSlotsForDropDown = () => {
  return [{
    value: 0,
    label: 'Morning'
  }, {
    value: 1,
    label: 'Afternoon'
  }, {
    value: 2,
    label: 'Evening'
  }]
}

export const getSortOptions = () => {
  return [{
    value: 0,
    label: 'Low to High'
  }, {
    value: 1,
    label: 'High to Low'
  }]
}

export const getSelectedProduct = (data: any, id: string) => {
  let prod: any = [];
  data.forEach((catItem: any) => {
    prod = [...prod, ...catItem.products]
  })
  let p = prod.filter((p: any) => p.product_id === id)[0]
  if(localStorage.getItem('selectedBatch')){
    p.selectedBatch = JSON.parse(localStorage.getItem('selectedBatch') as string)
  }
  return p
}