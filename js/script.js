// animate headline (welcome page)
const headline = document.querySelectorAll('.headline h1');
const profile = document.querySelector('.headline figure')
function animateHeadline(duration) {
    setTimeout(() => {
        headline[0].classList.add('show');
    }, duration);
    setTimeout(() => {
        headline[0].classList.remove('show');
        headline[1].classList.add('show');
    }, 2000);
    setTimeout(() => {
        headline[1].classList.remove('show');
        headline[2].classList.add('show');
    }, 3000);
    setTimeout(() => {
        headline[2].classList.remove('show');
        headline[3].classList.add('show');
    }, 4000);
    setTimeout(() => {
        headline[3].classList.remove('show');
        headline[4].classList.add('show');
    }, 5000);
    setTimeout(() => {
        headline[4].classList.add('show');
    }, 8000);
    setTimeout(() => {
        headline[4].classList.remove('show');
        profile.classList.add('show');
    }, 10000);
}

animateHeadline(1000);

// scroll navbar
const nav = document.querySelector('nav');
const navLink = document.querySelector('nav .row');
const navSpan = document.querySelectorAll('.hamBtn span');
window.addEventListener('scroll',()=> {
    // console.info(window.scrollY)
    if (window.scrollY >= 40) {
        nav.classList.add('show');
        navLink.classList.replace('link-light', 'link-dark');
        for (let i = 0; i < navSpan.length; i++) {
            navSpan[i].style.background = '#ffffff';
        }
    } else {
        nav.classList.remove('show');
        navLink.classList.replace('link-dark', 'link-light');
        for (let i = 0; i < navSpan.length; i++) {
            navSpan[i].style.background = '#121212';
        }
    }
})

// click hamBtn
const hamBtn = document.querySelector('nav .hamBtn');
const navbar = document.querySelector('nav .navbar');
const navbarUl = document.querySelector('nav .navbar Ul');
hamBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('show')
    navbarUl.classList.toggle('show')
    for (let i = 0; i < navSpan.length; i++) {
        navSpan[i].style.background = '#ffffff';
    }
})


// showcase

// svg path


