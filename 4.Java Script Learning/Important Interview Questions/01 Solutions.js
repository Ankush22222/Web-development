let students = ["subh","mango","shiv","shubham","mine","coral","blue","red","shivesh","ravindranathan"]


let houses = []

for (const student of students) {
    if(student.length < 5){
        houses.push("Malviya Nivas")
    }
    else if(student.length < 8){
        houses.push("Lohar nivas")
    }
    else if(student.length < 11){
        houses.push("coral bunglow")
    }
    else{
        houses.push("Mango nivas")
    }
    
}
console.log(houses)