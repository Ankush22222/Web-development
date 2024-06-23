console.log("This is promises")
// ise hum jab use karenge jab bohat sare callback pass karne ho


let prom1 = new Promise((resolve, reject)=>{
    // let a = Math.random();
    // yeh jab karenge tab random number o.5 se bad ahai toh reject hone par yeh print kar de and else hone par set timeout bhi print na kare
    // if(a<0.5){
    //     reject("No random number is supporting you")
    // }
    // else{
    //     setTimeout(() => {
    //         console.log("Yes I am done")
    //         resolve("Naam")
    //     }, 3000);
    // }
    setTimeout(() => {
        console.log("Yes I am done")
        resolve("Naam")
    }, 3000);
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
    // .catch se yeh hoga ki jaise hi error aya toh console log kardo error ayega but show nhi hoga
})