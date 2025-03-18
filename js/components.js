function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (elementId === 'header') {
                initializeNavigation();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

function toggleMobileNav() {
    const nav = document.querySelector('.site-header__nav');
    const toggleBtn = document.querySelector('.site-header__menu-toggle');
    if (nav && toggleBtn) {
        nav.classList.toggle('site-header__nav--open');
        toggleBtn.classList.toggle('active');
    }
}

function initializeNavigation() {
    const menuToggle = document.querySelector('.site-header__menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileNav);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('header')) {
        loadComponent('header', '../components/header.html');
    }
    if (document.getElementById('footer')) {
        loadComponent('footer', '../components/footer.html');
    }
    initializeNavigation();
});