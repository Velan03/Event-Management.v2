// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('April 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Gallery Modal
const galleryItems = document.querySelectorAll('.gallery-popup');
const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
const galleryModalImage = document.getElementById('galleryModalImage');
const galleryModalLabel = document.getElementById('galleryModalLabel');

galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const imageUrl = this.getAttribute('href');
        const caption = this.getAttribute('data-caption');
        
        galleryModalImage.src = imageUrl;
        galleryModalLabel.textContent = caption;
        galleryModal.show();
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const submitSpinner = document.getElementById('submitSpinner');
const successModal = new bootstrap.Modal(document.getElementById('successModal'));

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    submitText.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitSpinner.classList.remove('d-none');
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        // Hide loading state
        submitText.textContent = 'Send Message';
        submitBtn.disabled = false;
        submitSpinner.classList.add('d-none');
        
        // Show success message
        successModal.show();
        
        // Reset form
        contactForm.reset();
    }, 1500);
});

// Active navigation based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize first load
window.dispatchEvent(new Event('scroll'));