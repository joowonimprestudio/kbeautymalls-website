window.addEventListener('scroll', () => {
    const banner = document.querySelector('.top-banner');
    if (window.scrollY > 0) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});


window.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".inquiry-banner");
    const text = document.querySelector(".inquiry-banner-text");

    if (banner) {
        // Animate zoom in
        setTimeout(() => {
            banner.style.transform = "scale(1)";
        }, 50);
    }

    if (text) {
        // Animate slide-up
        setTimeout(() => {
            text.classList.add("show-text");
        }, 100);
    }
});