// CLASSES
// console.log("naam");


// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[1].style.backgroundColor = "red";

// ID
// document.getElementById("redbox").style.backgroundColor = "red"


// QUERY SELECTOR
// document.querySelector(".box").style.backgroundColor = "coral"
// ise first element backgroundColor red ho jayega

console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "red"
})
// sab element ke backgroundColor red karvna hai tab hum iska istemal karenge


console.log(document.getElementsByTagName("div"))
// sare div aa jayenge