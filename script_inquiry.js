window.addEventListener('scroll', () => {
    const banner = document.querySelector('.top-banner');
    if (window.scrollY > 0) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});