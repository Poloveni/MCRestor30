// Menu burger responsive
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animation du bouton
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '✓ Message envoyé !';
    btn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)';
    
    setTimeout(() => {
        alert('Merci pour votre demande ! Nous vous recontacterons rapidement.');
        e.target.reset();
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observer tous les éléments à animer
document.querySelectorAll('.service-card, .advantage-item, .gallery-item').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});

// Parallax effect sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Header transparent qui devient opaque au scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
        header.style.background = 'rgba(10, 14, 39, 0.95)';
    }
});

// Animation du logo au scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const logo = document.querySelector('.logo');
    
    if (logo) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            logo.style.transform = 'scale(0.9)';
        } else {
            logo.style.transform = 'scale(1)';
        }
    }
    
    lastScroll = currentScroll;
});

console.log('🔥 MCRestor30 - Site chargé avec succès !');
