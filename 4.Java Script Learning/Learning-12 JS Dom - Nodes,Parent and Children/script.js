console.log("Hello World");

console.log(document.body)
console.log(document.body.childNodes)

document.body.childNodes[0]
document.body.childNodes[1]
// console me document.body.childNodes[] me 0,1,2,3,4,5 likh kar nodes pta laga sakte hai lm 
document.body.childNodes[1].childNodes
// childnodes ke bhi child nodex excess kar sakte hai
// AGAR SIRF CHIDREN LIKH DIYA TOH SIRF EMEENT NODES MILENGE
let cont = document.body.childNodes[1]
cont.firstChild
// first and last nodes hai voh text nodes hai hum jayada tar inka kaam nhi hota hai 
cont.lastChild
// isko cont bana diya ab iske bhi child nodes excess kar sakte hai

cont.firstElementChild
cont.lastElementChild
// ise joh pehla element hoga voh milega naki Text(joh space liye huaee hai)

cont.lastElementChild.style.color = "red"
// ise box 5 ke ander likha huaa red ho jayega




// PARENT NODE
cont.lastElementChild.parentElement


// SIBLINGS
document.body.firstElementChild.children[4].previousElementSibling;


// TABLES
document.body.children[1];
// children[1] table hai isme voh milga

document.body.children[1].rows
// ise tr rows show kar dega