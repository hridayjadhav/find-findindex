let data = [10,20,30,5,3,7,1,80];
let myData = data.find(function(item){  // here we'll get the value of greater than 20. so it will show you the first value which is greater in the array.
    return item>20 
})
console.log(myData);

let myData2 = data.find((item)=> item<7);  // here it gives the value of less than 7 which comes first in the array.
console.log(myData2);

let myData3 = data.find((item)=> item<7 && item > 1); 
console.log(myData2);

let myFIdata = data.findIndex(function(item){ // here it will show u the index of 1, bcz it is less than 3 which comes first in the array.
    return item < 3
})
console.log(myFIdata);

let myFIdata2 = data.findIndex((item)=>item > 10 && item < 80);  // it gives the index 1. bcz greater than 10 and less than 80 is 20 bcz it comes first it the array.
console.log(myFIdata2);



let myArr = [     //in this we saw how to use find and findIndex to return the object
    {id : 10, name : 'hriday'},
    {id : 20, name : 'rohit'},
    {id : 35, name : 'mridul'},
    {id : 41, name : 'sheetal'},
    {id : 50, name : 'aditi'},
    {id : 66, name : 'vikas'}
]
//arrow func
let result = myArr.find((item)=>item.id < 20);
console.log(result);

let resultFI = myArr.findIndex((item)=>item.id > 20); // 35 is on 3rd index. so its the output.
console.log(resultFI);


//normally func.

let result2 = myArr.find(function(item){
    return item.id > 41;
})
console.log(result2);

let resultFI2 = myArr.findIndex(function(item){
    return item.id > 41;
})
console.log(resultFI2);
