import { isToday } from "date-fns";
import { timeSlotMapping } from "./constants"

export const getFilteredProducts = (data: any, selectedSlot: any, selectedDate: any, selectedCategory: any, selectedSort: any) => {
  let prod: any = [];

  if (selectedCategory) {
    const category = data.filter((catItem: any) => catItem.product_category === selectedCategory.category);
    prod = category[0].products;
  } else {
    data.forEach((catItem: any) => {
      prod = [...prod, ...catItem.products]
    })
  }
  if (selectedDate && !selectedSlot) {
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
              startTimeStamp,
              slotText,
              isValid: (startTimeStamp > minSlotTimeStamp && startTimeStamp < maxSlotTimeStamp) && (startTimeStamp > (new Date()).getTime())
            }
          }else{
            return {
              ...t,
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
  }).sort((a: any, b: any) => (new Date(a.value)).getTime() - (new Date(b.value)).getTime())
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