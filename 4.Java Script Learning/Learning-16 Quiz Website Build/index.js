function createCard(image,duration,title,cname,views,monthsold){

    document.querySelector(".duration").innerHTML ="14:00";
    document.querySelector(".title").innerHTML = "<b>Introduction to Web development</b>";
    document.querySelector(".cname").innerHTML = "WEB DEVELOPMENT";
    document.querySelector(".views").innerHTML = "750M views";
    document.querySelector(".monthsold").innerHTML = "7 months ago";
    
    
}

createCard("https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDReOVxV49qt2W3Rsz30-_2MH70rgcDgwWWA&s","14:00","Introduction to Web development","WEB DEVELOPMENT","750M","7")