import { timeSlotMapping } from "./constants"

export const getFilteredProducts = (data: any, selectedSlot: any, selectedDate : any, selectedCategory: any) => {
  let prod: any = [];
  if(selectedCategory){
    const category = data.filter((catItem: any) => catItem.category === selectedCategory.category);
    prod = category[0].products;
  }else{
    data.forEach((catItem: any) => {
      prod = [...prod, ...catItem.products]
    })
  }
  if(selectedDate && !selectedSlot) {
    prod = prod.filter((p: any)=> {
      const dateValues = Object.keys(p.slots);
      return dateValues.includes(selectedDate.value)
    })  
  }else if(selectedSlot && selectedDate){
    prod = prod.filter((p: any)=> {
      const value = p.slots[selectedDate.value]
      if(value){
        return value.some((item: any) => (timeSlotMapping as any)[selectedSlot.value].includes(item))
      }else{
        return false;
      }
    })
  }
  return prod;
}

export const getAllCategories = (data: any) => {
  return data.map((item: any) => {
    return {
      category: item.category,
      name: item.categoryName,
      image: item.categoryImage,
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
    return uniques.map((item: any) => {
      return {
        value: item,
        label: item
      }
    }).sort((a: any,b: any) => (new Date(a.value)).getTime()-(new Date(b.value)).getTime())
}

export const getSlotsForDropDown = () => {
  return [{
    value: 0,
    label: 'Morning'
  },{
    value: 1,
    label: 'Afternoon'
  },{
    value: 2,
    label: 'Evening'
  }]
}