const slots = [{
  category:'c1',
  products:[{
    productname: 'c1p1',
    slots:{
    "2021-07-13" : {
      slotTimings: [
        {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
        {startTime:"23:15", endTime:"24:00", "duration": 45, "link": "https://www.google.com"}
      ]
    },
    "2021-07-14": {
      slotTimings: [
        {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
        {startTime:"8:15", endTime:"9:00", "duration": 45, "link": "https://www.google.com"}
      ]
    }
  }
  },{
    productname: 'c1p2',
    slots:{
      "2021-07-13" : {
        slotTimings: [
          {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
          {startTime:"23:15", endTime:"24:00", "duration": 45, "link": "https://www.google.com"}
        ]
      },
      "2021-07-14": {
        slotTimings: [
          {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
          {startTime:"8:15", endTime:"9:00", "duration": 45, "link": "https://www.google.com"}
        ]
      }
    }
  }]
},{
  category:'c2',
  products:[{
    productname: 'c2p1',
    slots:{
    "2021-07-13" : {
      slotTimings: [
        {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
        {startTime:"23:15", endTime:"24:00", "duration": 45, "link": "https://www.google.com"}
      ]
    },
    "2021-07-14": {
      slotTimings: [
        {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
        {startTime:"8:15", endTime:"9:00", "duration": 45, "link": "https://www.google.com"}
      ]
    }
  }
  },{
    productname: 'c2p2',
    slots:{
      "2021-07-13" : {
        slotTimings: [
          {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
          {startTime:"23:15", endTime:"24:00", "duration": 45, "link": "https://www.google.com"}
        ]
      },
      "2021-07-14": {
        slotTimings: [
          {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},
          {startTime:"8:15", endTime:"9:00", "duration": 45, "link": "https://www.google.com"}
        ]
      }
    }
  }]
}]

const newSlots = {};

const tempKey = '2021-07-13';
const category = 'c1';
const evening = '18';

const allProducts = [];

// Object.keys(slots).forEach((key)=>{
//   const slotData = slots[key];
//     const arr = slotData.slots.map((dataObj) => {
//       const startTime = dataObj.startTime.split(':')
//       const hr = `0${startTime[0]}`.slice(-2)
//       const min = `0${startTime[1]}`.slice(-2)
//       const startTimeStamp = new Date(`${key} ${hr}:${min}:00`).getTime()
//       const slotText = `${dataObj.startTime} - ${dataObj.endTime}`
//       const currentTimestamp = new Date(`${tempKey} 18:00:00`)
//       return {
//         ...dataObj,
//         startTimeStamp,
//         slotText,
//         isValid: startTimeStamp > currentTimestamp
//       }
//     })
//     newSlots[key] = {slots:arr};
// })

// {startTime:"7:15", endTime:"8:00", "duration": 45, "link": "https://www.google.com"},

// console.log(JSON.stringify(newSlots, null, 2));
slots.forEach((c) => {
  c.products.forEach((p)=>{
    const temp = p.slots[tempKey].slotTimings 
    const massageddata = temp.map((t) => {
      const startTime = t.startTime.split(':')
      const hr = `0${startTime[0]}`.slice(-2)
      const min = `0${startTime[1]}`.slice(-2)
      const startTimeStamp = new Date(`${tempKey} ${hr}:${min}:00`).getTime()
      const slotText = `${t.startTime} - ${t.endTime}`
      const currentTimestamp = new Date(`${tempKey} ${evening}:00:00`)
      return {
        ...t,
        startTimeStamp,
        slotText,
        isValid: startTimeStamp > currentTimestamp
      }
    })
    p.slots[tempKey].slotTimings = massageddata
  })
})

console.log(JSON.stringify(slots, null, 2));