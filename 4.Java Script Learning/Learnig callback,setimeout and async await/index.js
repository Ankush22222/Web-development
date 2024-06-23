// function hello() {
//     console.log("hello")
// }

// setTimeout(hello,2000)





// OR




const hello = () => {
    console.log("hello")
}

setTimeout(hello, 2000);



// OR


console.log("one")
console.log("two")


setTimeout(() => {
    console.log("hello")
}, 4000);

// lower code exicute ho jayega upar wala iska time khatam hone ke baad exicute hoga
// code wait nhi karega
console.log("three")
console.log("four")




//CALLBACKS


function sum(a, b) {
    console.log(a + b);
}

// ek function ko dusre ke ander pass karna hi callback hai simple words me

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}


calculator(2, 2, sum);
// dekho calculator ke ander a ,b ke sath sum function ko call lagya hai




// CALLBACK HELL -- NETSTED CALLBACK, callback ke ander callback

function getData(dataId) {
    console.log("data", dataId)

    // hamne Id bheji uske basis data aa jayega 
}

// isme hum timeout bhi set kar sakte hai





function getData(dataId) {

    setTimeout(() => {
        console.log("data", dataId)
    }, 4000);
}


// data1
// data2
// data3
// data4

// agar hame pehle data1 phir data2 and fir data3 sab ek-ek kar ke data print karwana chahte hai toh uske liye yeh code use karenge or en data ke bich me hame delay chaihye

function getData(dataId, getNextData) {
    // getNextData callback ke ander callback chahte hai toh hum yeh likhenge 
    setTimeout(() => {
        console.log("data", dataId)
        if (getNextData) {
            getNextData();
        }
        // agar yeh function exist karta ho toh getData2 bina error ke print ho jaye

    }, 4000);
}

// getData(1, () => {
//     console.log("getting data2....")
//     getData(2,() => {
//         console.log("getting data3....")
//         getData(3,() => {
//             console.log("getting data4....")
//             getData(4);
//         })
//     })
// })
// this is diffcult to understand iske ke liye hum PROMISES ka use karenge

// USING PROMISES or yeh sab hamne promise sikhne ke baad kiya hai
// isko hamne likh diya toh hame getNextData likhne ki jarurat nhi hai 
getData(1).then((result) => {
    console.log(result);
    getData(2).then((result) => {
        console.log(result)
    })
})


// PROMISES

// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise")
// agar hame promise ko fullfil ya resolve karna hai toh resole likhenge
// resolve(11);
//     reject("error")
// })

// promises provided by generally by javascript


// function getData(dataId, getNextData) {
// api ke andedr promise aise return karegi
// // ab hum agar geData karenge toh hame hame promise return hoga
// return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("data",dataId)
//         resolve("success")
// ab promise ko print karainge console me final value ko call lagane ke baad 
// agar yaha par console nhi hota toh hum data nhi milta or hum reject(error) print krawa dete
// promise ko resolve or reject toh dusra karega hume toh create kaisse karte hai promises ko yeh hamne sikha promise ko use kaise karna hai yeh hamare liye IMPORTANT hai
// Promises ka use hum generally .then and .catch me hi karte hai

//             if(getNextData){
//                 getNextData();
//             }

//         }, 5000);
//     });
// }



const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise ")
        // resolve("11");
        reject("network error")
    })
}
let promise = getPromise();
// humget promise ko call laga sakte hai or get promise hame promise return karega
// yeh resolve ke lliye hai
promise.then((result) => {
    console.log("Promise fullfilled".result)
})

// yeh reject ke liye hai
promise.catch((error) => {
    console.log("rejected", error)
})






//PROMISE CHAIN

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000);
    })
}


function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000);
    })
}
// yeh upper kam generally API karta hai toj hame toh sirf p1.then wala kam karna hota hai
// console.log("fetching data1....")
// let p1 = asyncFunc1();
// p1.then((result) => {
//     console.log(result)
// })




// OR  

// console.log("fetching data1....")
asyncFunc1().then((result) => { })



// console.log("fetching data2....")
// let p2 = asyncFunc2();
// p2.then((result) => {
//     console.log(result)
// })

// ISE HUM DIRECT CALL LAGA SAKTE HAI LET KARNE KI JARURAT NHI HAI JAISE KI ASYNCFUNC().THEN






// in sab me pehle dono data fetch honge baad me dono sath me orint honge but hamne toh ek-ek karke chiye toh hum uske liye chaining kar sakte hai
console.log("fetching data1....")
let p1 = asyncFunc1();
p1.then((result) => {
    console.log(result)



    console.log("fetching data2....")
    let p2 = asyncFunc2();
    p2.then((result) => {

        console.log(result);


    })
})

// PROMISES KI JAGAH ASSYNC AWAIT KA USE KARNA ACHA RAHEGA 


// ASYNC AWAIT

async function naam() {
    console.log("naam")
}
// jaise hi naam() ko type karenge console me vaisa hi promise return ho jayega

// await pauses the extension of its surrounding async function until the promises is settled

function api() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        console.log("Weather Data");
        resolve(200);

      }, 2000);
    })
}

async function getWeatherData() {
    // asyn function ke ander hi use kar sakte hai
    await api(); //1st call
    await api(); //2st call
}


// EXAMPLE


function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
        }, 2000);
    })
}

async function getAllDta() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}
// async await me hame call karna padata hai automatically call lagne ke liye ham IIFE ka use karenge

(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();
