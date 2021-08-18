/*=== Menu Show === */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=== Active and Remove Menu === */
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=== Scroll Animation ===*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*Scroll Home*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*Scroll About*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*Scroll Skills*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__container-card',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*Scroll Work*/
sr.reveal('.work__img',{interval: 200}); 

/*Scroll Contact*/
sr.reveal('.contact__input',{interval: 200});


/* Typed */
const typed = new Typed('.typed', {
	
	stringsElement: '#text-strings', 
	typeSpeed: 75,
	startDelay: 300, 
	backSpeed: 60, 
	smartBackspace: true,
	shuffle: false, 
	backDelay: 900, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});

