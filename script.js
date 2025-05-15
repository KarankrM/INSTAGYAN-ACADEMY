// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating call button visibility
const floatingCall = document.querySelector('.floating-call');

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) { // Only show on mobile
        if (window.scrollY > 500) {
            floatingCall.style.display = 'block';
        } else {
            floatingCall.style.display = 'none';
        }
    }
});

// Navbar background change on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(30, 58, 138, 0.95)';
    } else {
        nav.style.background = 'transparent';
    }
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.program-card, .benefits-list li');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check