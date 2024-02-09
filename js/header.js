const header = document.getElementById('header');
const navbarStartupz = document.getElementById('navbar-startupz');
const navbarContact = document.getElementById('navbar-contact');
const navbarBtn = document.getElementById('navbar-btn');
const logoImg = document.getElementById('img-logo');
// logoImg.style.transition = 'width 0.5s ease, height 0.5s ease, transform 0.5s ease';

const handleScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
        navbarStartupz.classList.add('navbar-a-scrolled');
        navbarContact.classList.add('navbar-a-scrolled');
        navbarBtn.classList.add('navbar-btn-scrolled');
        logoImg.src = './assets/logo_white.png';
        logoImg.classList.add('img-logo-sm');
        header.style.backgroundColor = 'rgba(61, 79, 92, 0.9)';
    } else {
        header.classList.remove('header-scrolled');
        navbarStartupz.classList.remove('navbar-a-scrolled');
        navbarContact.classList.remove('navbar-a-scrolled');
        navbarBtn.classList.remove('navbar-btn-scrolled');
        logoImg.src = './assets/logo.png';
        logoImg.classList.remove('img-logo-sm');
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
}

window.addEventListener('scroll', handleScroll);