let rect = document.querySelector("#center");


rect.addEventListener("mousemove", function (details) {
    // getBoundingClientRect se yeh pta chal jata hai ki mouse kaha click karne se pta lag jata haik hamko ise
    let rectanLocation = rect.getBoundingClientRect();
    let insiderectval = details.clientX - rectanLocation.left;
    // isme hame mouse ki location mil jati hati hai jaha jaha mouse move hoga vaha vaha ko location yeh bta dega yeh
    if (insiderectval < rectanLocation.width / 2) {

        let redColor = gsap.utils.mapRange(0, rectanLocation.width/2, 255, 0, insiderectval);
        // mapRange(inMap,inMax,outMax,valueToMap)

        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    }
    else {
        let blueColor = gsap.utils.mapRange(rectanLocation.width/2, rectanLocation.width , 0, 255, insiderectval);
        
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }

})
rect.addEventListener("mouseleave",function () {
    gsap.to(rect, {
        backgroundColor: "white",
    })
})