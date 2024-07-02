// API(Application Programming Interface) Call


// the fetch an api provides an interface for fetching(sending/receiving)resources
// Igt uses Request and response objects

// the fetch() method is used to fetch a resourse(data)

// let promise = fetch(url,[options])
// spi ko hum kuch request bhejte hai and ho hame koi respond bhejte hai



// const url = "https://openlibrary.org/search/authors.json?q=twain" // Json Formet
// let promise = fetch(url);
// console.log("promise");

// async await se is api call ko exicute karenge

// SIRF DATA LANE KI REQUEST KO HUM GET REQUEST KEHTE HAI HUM
// const getData = async () => {
    // console.log("getting data....");
    // let response = await fetch(url);
    // sirf itne code se joh data ayega voh usable nhi hoga 
    // console.log(response);
    

    // let data = await response.json();
    // ab joh data ayega voh usable hoga
    // console.log(data);
    // console.log(data[1].text) karke hum specific data ko print karwsa sakte hai
// }


// TERMS TO UNDERSTAND THINGS

// JSON() method: returns a second promise that resolves eith the of parsing the response body text as JSON.(input is JSON,output is JS object)

// json(modern formet) is javascript object notation 

// in old times data comes in the form of XML


// API KO CALL KARNE KA PROCESS KAISE WORK KARTA HAI


            //                   request bhbejte hi 
            //                            |
            //                            |
            //        1.response(json formet ke ander response hota hai) 
            //                            |
            //                            |
            //    2.hame ise javascript objrct format me convert karana hota hai






            
const url = "https://openlibrary.org/search/authors.json?q=twain" // Json Formet
const page = document.querySelector("#para");
const btn = document.querySelector("#btn");

const getData = async () => {
    console.log("getting data....");
    let response = await fetch(url);
    console.log(response)
  
    let data = await response.json();
    page.innerText = data[1].text;    
}

btn.addEventListener("click", getData)