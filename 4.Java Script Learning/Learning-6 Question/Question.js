let random = Math.random();

let a = prompt("enter your number a")
let b = prompt("enter your number b")
let c = prompt("enter your operator")


let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random > 0.1) {
    //Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    
}
 else {
    // Perform wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}