console.log("hey this is tutorial 2 of JS")



// HUMESA VAR KI JAGAH LET USE KARE KYUKI JAISE HI BAHARV LET LIKH DIYA YEH AUOTOMATICALLY GLOBAL VARIBLE BAN GAYA
// var a=5;
// var b=2;
var c = "name";
// double coat ke ander likha hai toh java script apne aap pata leaga ki yeh ek string hai
// ese hum variable declare karenge java script ke ander

var _a = "shubham"
// ese hum kisi bhi naam ko declare kar sakte its rule and a55 equals to name de kar declare nhi kar sarkte 
// console.log(a +b+7)
// console.log(typeof a,typeof b,typeof c)
// ise hum kisi bhi variable ka data type pta lagane ke liye use kar sakte hai

// var a=5;
// yeh ek gloal variable hai hum isme changes kar sakte hai
// a=a+1;
// isme me yeh allowed hoga


// const a1 = 5;
// yeh ek block variable hai declare karne ke baad me isko change nhi kar sakta
// a1 = a1 +1 ;
// yeh nhi ayega




let a=5;
let  b=2;
{
    let a=77;
    // it is valid a=77 kyuki block me hi let ka use karke value given di hai
    // pehle block me joh let hai voh refer hoga fir let a=5 ayega  and donpok jagah var ka use kiya hota toh 77 aata kyuki var globaly scope hota hai na ki block scope hota hai
        console.log(a)
}
console.log(a)

let x ="name";
let y = 22;
let z = 2.55;
const p = true;
// const p = true isko change nhi ja sakte hai yeh boolean hai
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)


let o = {
    name: "shubham",
    "job code": 5600,
    "is_handsome":true
}

console.log(o);
// yeh object print ho jayega

o.salary = "100crores";
console.log(o);
// ese hum kisi ko add ya change kakr sakte hai
o.salary = "500crores";
console.log(o);