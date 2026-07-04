/**
 * Gerara Coffee - Main Interactivity Script
 * Optimized for Mobile performance and Smooth UX.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Sticky Navigation Bar
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    // Toggle background styling based on scroll depth
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    // Run once on load to ensure accuracy if page is refreshed mid-scroll
    handleNavbarScroll();


    // ==========================================
    // 2. Mobile Menu Menu Toggle (Touch Optimized)
    // ==========================================
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const menuIcon = menuBtn.querySelector('i');

    const toggleMobileMenu = () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Swap FontAwesome icons smoothly
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
            // Prevent background scrolling when menu is open on mobile
            document.body.style.overflow = 'hidden';
        } else {
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
            document.body.style.overflow = '';
        }
    };

    menuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu gracefully when clicking any nav link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });


    // ==========================================
    // 3. Scroll Reveal Animation
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    // Intersection Observer allows smooth animations without lagging on mobile screens
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve elements once they've animated in to save memory
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.12, // triggers when 12% of the element enters the view
        rootMargin: "0px 0px -40px 0px" // minor buffer for an elegant offset delay
    });

    revealElements.forEach(element => revealObserver.observe(element));
});
