window.addEventListener('scroll', () => {
    const banner = document.querySelector('.top-banner');
    if (window.scrollY > 0) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});



const backgrounds = document.querySelectorAll(".slide-bg");
const texts = document.querySelectorAll(".slide-text");
let current = 0;

setInterval(() => {
    const prev = current;
    current = (current + 1) % backgrounds.length;

    // OLD slide: fade out + zoom in
    backgrounds[prev].style.opacity = "0";
    backgrounds[prev].style.transform = "scale(1.1)";
    backgrounds[prev].style.zIndex = "0";

    // NEW slide: start zoomed in, then zoom out + fade in
    const next = backgrounds[current];
    next.style.transform = "scale(1.1)";
    next.style.opacity = "0";
    next.style.zIndex = "1";

    setTimeout(() => {
        next.style.opacity = "1";
        next.style.transform = "scale(1)";
    }, 50); // triggers CSS transition

    // TEXT logic
    texts[prev].classList.remove("show-text");
    texts[current].classList.add("show-text");
}, 5000);



// Initial animation for first image
backgrounds[0].style.opacity = "0";
backgrounds[0].style.transform = "scale(1.1)";
backgrounds[0].style.zIndex = "1";

setTimeout(() => {
    backgrounds[0].style.opacity = "1";
    backgrounds[0].style.transform = "scale(1)";
}, 50);

// Initial text too (optional, for smooth fade-in)
texts[0].classList.add("show-text");