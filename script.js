var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer","Backend Developer","FullStack Developer"],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

/*-------Scroll Sections Active Link--------------*/
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top >=offset && top < offset + height)
    {
        navlinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
        });
    };
});

};


/*-----------------scroll reveal-------------*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:100
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-container', { origin: 'left' });
ScrollReveal().reveal('.projects-container', { origin: 'right' });
ScrollReveal().reveal('.certifications-container', { origin: 'bottom' });
ScrollReveal().reveal('.contact form', { origin: 'top' });