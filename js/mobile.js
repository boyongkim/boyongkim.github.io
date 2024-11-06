        // JavaScript to toggle the mobile menu
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links.mobile-menu');

            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('show');
            });
        });