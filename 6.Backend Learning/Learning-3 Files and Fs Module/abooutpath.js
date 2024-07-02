import path  from "path"

let myPath = "C:\\Web-development\\ 6.Backend Learning\\ Learning-3 Files and Fs Module\\naam.txt"

// string bana rahe hai isliye \\ iska use kiya hai hamne 


console.log(path.extname(myPath))
// isne hame bata diya iska extension .txt hai


console.log(path.dirname(myPath))
// directory ka naam de diye isne hamko jab path.dirname karke  run kiya jab

console.log(path.basename(myPath))
// ise hame file ka base name pata lag jayega hamko 


console.log(path.join("c:/", "programs\\naam.txt"))
// yeh in sab ko join karke de dega