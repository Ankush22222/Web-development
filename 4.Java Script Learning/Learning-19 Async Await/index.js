// function getData(){
//         return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }


// console.log("Loading Modules")

// console.log("Do something else")

// console.log("Load data")

// let data = getData()

// console.log(data)
// isme line se sab print ho jayenge but promise get data wala chalta rahega yeh upper nad lower side wala exicute ho jayega yeh iske time khatma hone ke baad yeh ayega warna yeh pending batayega 
// agar hum chahte hai ki pehle line se promise print ho jayega uske baad yeh lower wala print ho jayega iske liye hum async and await ka use karenge



// console.log("Process data")

// console.log("task 2")
// javascript kaise chalti hai voh likha huaa hai






// async function getData(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(455)
//     }, 3500);
// })
// }
// yeh wala promise data backgorund me exicute hota rahega



// async function main(){


//     console.log("Loading Modules")
    
//     console.log("Do something else")
    
//     console.log("Load data")
    
//     let data = await getData()
//     // await lagne ke liye main function bhi lagana padega
    
//     console.log(data)
    
//     console.log("Process data")
    
//     console.log("task 2")
    
//     }
    
//     main()



async function getData(){
  //simulate getting data from a server
//   fetch api ko 2 baar await karke pass karna padta hai  
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
  console.log(data)
}


async function main(){


console.log("Loading Modules")

console.log("Do something else")

console.log("Load data")

let data = await getData()
// await lagne ke liye main function bhi lagana padega

console.log(data)

console.log("Process data")

console.log("task 2")

}

main()