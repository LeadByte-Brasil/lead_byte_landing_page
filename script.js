// Header scroll effect
const header = document.getElementById('header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe product cards and feature cards
document.querySelectorAll('.product-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Button clicks (you can add real functionality here)
document.querySelectorAll('.btn-gradient, .btn-ghost').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.textContent.includes('Demo')) {
            console.log('Opening demo booking...');
        } else if (this.textContent.includes('Teste')) {
            console.log('Starting free trial...');
        }
    });
});
