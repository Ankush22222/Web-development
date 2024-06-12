let arr = [1,13,5,7,11];


// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
//     ise hum new array form kar sakte hai square ho jayega and new array print karwa dega
// }

// console.log(newArr);


// IN SIMPLE WAYS
// MAP
let newArr = arr.map((element,index,arr)=>{
    return element**2;
})
console.log(newArr)




// FILTER
const greaterThanSeven = (e)=>{
    if(e>7){
        return true;   
    }
    return false;
}
console.log(arr.filter(greaterThanSeven));


// REDUCE

let arr2 = [1,2,3,4,5];
const red = (a,b)=>{
    return a*b;
}
// pehle 1 and 2 multiply hoga bad ke 2 and 3 multiply hoga add hoga and 3 and 4,4 and 5 mutiply ho kar add ho jayega and chalta jeyga and ek number return karega
console.log(arr2.reduce(red))