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

document.addEventListener("DOMContentLoaded", () => {
    const postBoxes = document.querySelectorAll(".post-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(postBoxes).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    postBoxes.forEach((box) => observer.observe(box));
});