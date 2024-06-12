let arr = [1,2,,4,5,7];
// Index   0,1,2,3,4
console.log(arr);
// javascript type of array ko object batata hai 
console.log(typeof arr);

arr[1] = 5566;
// array yaha par change ho jayega but in string hum ise change nhi kar sakte
console.log(arr.length);
console.log(arr[1]);
// arr[1] se second element milega


console.log(arr.toString());
// ise array string ban jayega

console.log(arr.join(" and "))
// sab element ke bich me and aa jayega

console.log(arr.pop());
// FOR LAST ELEMENT: last element ko nikal dega in sab ke liye console me jaise hi arr type karenge pura array aa jayega 

console.log(arr.push(100));
console.log(arr.push("naam"));
// FOR LAST ELEMENT: push(100) and push("naam") add kar dega in sab ke liye console me jaise hi arr type karenge pura array aa jayega 


console.log(arr.shift());
// FOR FIRST ELEMENT: first element array ka nikal lega

console.log(arr.unshift("naamm"));
// FOR FIRST ELEMENT: last me add kar dega naamm ko 

console.log(delete arr[5])
// fifth wala element empty dekhayega delete ho jayega but length voh hi rahrgi lenght change nhi hoga memory toh allocate ki gayi hai but empty show ho rahi hai

let a = [2,4,6,8,10];
console.log(arr.concat(a))
// arr and a dono array add hojayenge and existing array ki value change nhi hogi

let a1 = [5,2,7,1]
console.log(a1.sort())
// values ko arrange kar dega array ke ander


let a2 = [2,5,7,1]
// console.log(a2.splice(1,2))
// index 1 se lekar 2 tak number gayab ho jayenge arr console me type karne par [2,1] answer aayega
// console.log(a2);
console.log(a2.splice(1,2,2222,5555));
// add ho jayenge 2222 and 5555 