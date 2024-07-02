const fs = require('fs')
console.log(fs)

console.log("starting")



// fs.writeFileSync("naam.txt","naam is good boy")
fs.writeFile("naam2.txt","naam is a good boy",() =>{
    // 1.for creating a file
    // hamko wriite file ka use krna hai kyuki write file sync ka use karne se problem create ho sakti hai means error aa sakta hai
    console.log("done");
    fs.readFile("naam2.txt",(error,data)=>{
        console.log(error,data.toString())
        // isko run karne par null aa jayega kyuki koi error nhi hai isliye
        //2. agar hame or file write ya read karni hai toh ise  or code likhna hoga ese yeh code complex ban jayega kyuki yaha par complex hell ho raha hai
            })
})


// 3.append a code 
fs.appendFile("naam.txt","naamrobot",(e,d)=>{
    // ise bhi file create kar sakte hai hum naam.txt me yeh naamrobot aa j ayega
    // jitni bar run karenge utni baar append file me hota rahega
    console.log(d);
})
console.log("ending")



// 4.Promises in mainpromise.js
// 5.Path module in aboutpath.js