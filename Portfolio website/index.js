// toggle icon navbar

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}






// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })


    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);


    // remove toggle icon and navbar
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}




// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.homecont, heading', {origin: 'top'});
ScrollReveal().reveal('.homeimg, .servcont, .portbox, .contact form', {origin: 'button'});

ScrollReveal().reveal('.homecont h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.homecont p, .aboutcont', {origin: 'right'});




// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


