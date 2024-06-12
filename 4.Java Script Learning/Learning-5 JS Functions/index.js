function nice(name) {
console.log("Hey " + name + " you are nice")
console.log("Hey " + name + " you are good")
console.log("Hey " + name + " your t-shirt are nice")
console.log("Hey " + name + " you are cool")
}



nice("Rohan")
nice("Shivam")
// ise hame bar bar line par ja kar change nhi karna padega function ki help se direct yaha se call laga change kar sakte hai

function sum(a,b) {
    console.log(a+b)
}

sum(2,5);
// yeh hu  normally print karvane ke liye kakr sakte hai


function sum(a,b,c=3) {
    // c=5 ek default value ahi
    // console.log(a+b)
    return a+b+c
}

result1 = sum(2,5);
result2=sum(2,5,9);
console.log("The value of sum is :" ,result1);
console.log("The value of sum is :" ,result2);
// yeh return lo value ko dalane ke liye use karte hai hum ise 

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}
func1(34);
func1(66);
// Arrow function