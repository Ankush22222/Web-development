let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
   btn.style.backgroundColor = "red"
   document.querySelector(".box").innerHTML = "Hey you are clicked"
})
btn.addEventListener("contextmenu",()=>{
  alert("Don't right click please")
//   jab button par right click karenge toh alert aa jayega
})

document.addEventListener("keydown",(e)=>{
    // e aaygya is liye yeh ek object event hai
    console.log(e.Key, e.keyCode)
    // button par click karne ke baad keyboard par koi bhi button click karnge toh uska code aajayega
 })
 