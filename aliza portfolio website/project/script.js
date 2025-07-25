// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

menuBtn.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    navbar.style.backdropFilter = 'blur(8px)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', updateNavbar);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    if (this.getAttribute('href') === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Back to Top Button Visibility
const backToTop = document.querySelector('.back-to-top');

function updateBackToTop() {
  if (window.scrollY > 500) {
    backToTop.style.opacity = '1';
    backToTop.style.pointerEvents = 'auto';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.pointerEvents = 'none';
  }
}

window.addEventListener('scroll', updateBackToTop);
updateBackToTop(); // Initial check

// Work Items Hover Effect
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('img').style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseleave', () => {
    item.querySelector('img').style.transform = 'scale(1)';
  });
});