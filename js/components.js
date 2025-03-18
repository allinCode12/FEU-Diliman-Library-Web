// Function to toggle mobile navigation
function toggleMobileNav() {
    const nav = document.querySelector('.site-header__nav');
    nav.classList.toggle('site-header__nav--open');
    const toggleBtn = document.querySelector('.site-header__menu-toggle');
    toggleBtn.classList.toggle('active');
}

// Function to initialize navigation
function initializeNavigation() {
    const menuToggle = document.querySelector('.site-header__menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileNav);
    }
}