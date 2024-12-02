window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
