// ==========================================================================
// 1. Professional Branded Preloader Logic
// ==========================================================================
(function() {
    const preloader = document.getElementById('preloader');
    let isLoaded = false;

    function hidePreloader() {
        if (!isLoaded && preloader) {
            isLoaded = true;
            // Triggers the CSS transition fade out
            preloader.classList.add('fade-out');
            
            // Completely removes it from the DOM layout once the transition ends
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }
    }

    // Safety Net: Force reveal the website after 4 seconds if images hang up
    setTimeout(hidePreloader, 4000);

    // Dynamic Trigger: Hide immediately when all assets and images fully arrive
    window.addEventListener('load', hidePreloader);
})();

// ==========================================================================
// 2. Core Interactive Functions (Runs when DOM elements are ready)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Navbar Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Navigation Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
            
            // Seamlessly swap out FontAwesome icons based on visibility state
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Autoclose mobile side menu panel upon picking a link item
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Elegant Scroll Reveal Observer ---
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop watching once it transitions onto view to maximize performance
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }
});
