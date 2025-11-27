const root = document.documentElement;
const color1 = getComputedStyle(root).getPropertyValue('--color-1').trim();

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": color1
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 0,
            "random": false
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": color1,
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "random",
            "out_mode": "bounce",
            "bounce": true
        }
    },
    "retina_detect": false
});

// UPDATED SCROLL LISTENER
window.addEventListener('scroll', function() {
    const backToTopArrow = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        // Fade in
        backToTopArrow.style.opacity = '1';
        backToTopArrow.style.visibility = 'visible';
    } else {
        // Fade out
        backToTopArrow.style.opacity = '0';
        backToTopArrow.style.visibility = 'hidden';
    }
});