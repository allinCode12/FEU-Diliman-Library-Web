// Function to load HTML components
function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    if (document.getElementById('header')) {
        loadComponent('header', '../components/header.html');
    }
    
    // Load footer
    if (document.getElementById('footer')) {
        loadComponent('footer', '../components/footer.html');
    }
});