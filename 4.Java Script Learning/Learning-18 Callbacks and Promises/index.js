console.log("naam is a hacker");
console.log("Rohan is a hecker");


setTimeout(() => {
    console.log("I am inside setTimeoout")
    // yeh last me exicute hoga
}, 2000);


console.log("The end");
// pehle yeh exicute hoga 




const fn = () => {
    console.log('Nothing');
    // call bak ke ander callback
}


const callback = (arg, fn) =>{
    console.log(arg)
    fn()
}


const loadScript = (src, callback) => {
 let sc = document.createElement("script");
 sc.src = src;
 sc.onload = callback("Naam",fn)
 document.head.append(sc);
} 

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);