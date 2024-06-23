let a = prompt("Enter first number")


let b = prompt("Enter second number")

// let sum = a + b;
// a and b dono ko string lega javascript parseInt lagane se calculate ho jaeyga wrna wrong sum ka output ayega

if(isNaN(a) || isNaN(b)) { 
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)
// parseInt lagane ke baad hamne agar string pass kar diya toh not a number output ayega

// console.log("The sum is:",sum)

// agar error ko handle karne ke liye try catch kaa istemal karenge ka use karenge
// error ko throw nhi hone diya catch kar lega

// Try and catch use
try {
    console.log("The sum is:",sum*x)

} catch (error) {
    console.log("Error aa gaya bhai ")
    
}

finally{
    console.log("Files are being closed and db connection is being closed")
    
}


// Finally use 

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        // finally se retutn ke baad ka code bhi chalta hai
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()