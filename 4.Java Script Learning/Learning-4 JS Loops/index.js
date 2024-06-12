console.log("I am a tutorial on loops");


let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name:"laptop",
    role:"programmer",
    company:"dell"
}

for (const key in obj) {  
        const element = obj[key];
        console.log(key, element);
        // FOR OBJECT
        // agar hame kisi object ki keys chaiye toh ham forin loop ka istemal kar sakte hai
}

for (const c of "naam") {
    console.log(c)
    // FOR STRING AND ARRAY
    // naam print ho jayega ise hu string and arrays print karvane ke liye use kar sakte hai
}

// let i = 1;
// while (i<7) {
//     console.log(i);
//     i++;
// }


let i = 1; 
do {
    console.log(i);
    i++;
} while (i<7);