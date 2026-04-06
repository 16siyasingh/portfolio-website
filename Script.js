// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
});

// Button click animation
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Project details coming soon!");
    });
});