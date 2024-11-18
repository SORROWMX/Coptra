document.addEventListener('DOMContentLoaded', function() {
    const particlesConfig = {
        particles: {
            number: {
                value: 180,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#0066cc", "#6633cc", "#3366cc"]
            },
            shape: {
                type: ["circle", "triangle", "star"],
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0066cc",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 1200,
                    rotateY: 1800
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    };

    if (typeof particlesJS !== 'undefined') {
        particlesJS('background-particles', particlesConfig);
    }
}); 