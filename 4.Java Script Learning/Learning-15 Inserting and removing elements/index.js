// INNER
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".container").innerHTML)
// ise conatiner ke ander ka text show who jayega


console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
// ise inner html joh hogi box ke ander ki voh aa jayegi
console.log(document.querySelector(".box").innerText)

console.log(document.querySelector(".box").innerHTML = "Hey I am a naam")
// ise inner html change kar sakte hai


// OUTER
console.log(document.querySelector(".container").outerHTML)
              // iske ander container and box html dono aa jayenge


// TAGNAME--> sirf element ke liye applicable hota hai
console.log(document.querySelector(".container").tagName)
// iske ander jo container ko joh tagname DIV diya hai voh aajayenge



// NODENAME-->yeh kisi bhi tarah ke node ke liye applicable hai
console.log(document.querySelector(".container").nodeName)


// TEXT CONTENT
console.log(document.querySelector(".container").textContent)
// iske ander ka text content mil jayega


// HIDDEN 
// console.log(document.querySelector(".container").hidden = true)
// ise conatiner ke pass me hidden aa jayega elements ke ander


// ATRRIBUTE
console.log(document.querySelector(".box").hasAttribute("style"))
// ise true print hoga kyoki style likhi hui hai
console.log(document.querySelector(".box").getAttribute("style"))
// isme kya attribute hai voh aajayenge
console.log(document.querySelector(".box").setAttribute("style","display: inline"))
// isme display inline aa jayega 
console.log(document.querySelector(".box").attributes)
// ise sare attinbutes aajayenge
console.log(document.querySelector(".box").removeAttribute("style"))
// ise sytle attribute hat jayega


// DATASET
console.log(document.querySelector(".box").dataset)
// dataset se joh hamne data-createdby kiya tha voh aajayega

// INSERT A ELEMENT
// 1.TO CREATE A ELEMENT
let div = document.createElement("div");
div.innerHTML = "I have inserted by naam";
div.setAttribute("class",  "created");
document.querySelector(".container").append(div);
// .append karne se last me mmilega element

document.querySelector(".container").before(div);
// div conatiner se pehle aa jayega

// 2.BY insertAdjacentHTML
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "I am insereted by naam")
// teh container ke end hone se pehle aa jayega ise div insert ho jayaega


// REMOVE DIV
// console.log(document.querySelector(".box").remove())



// CLASSNAME AND CLASSTEST
console.log(document.querySelector(".container").classList)
// puri class ki list mil jayegi
console.log(document.querySelector(".container").className)
// class ke ander ke name mil jayenge

console.log(document.querySelector(".container").classList.add("blue"))
// isme class blue bhi add ho jayegi
console.log(document.querySelector(".container").classList.remove("blue"))
// ise class remove ho jayegi

console.log(document.querySelector(".container").classList.toggle("red"))
// agar open hai toh close kardo and close hai toh open krdo
// means class lagi hai toh hat jayegi and nhi hai toh lag jayegi