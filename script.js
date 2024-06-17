document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
        });

        setTimeout(() => {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
            targetSection.style.opacity = '1';
        }, 500);
    });
});
