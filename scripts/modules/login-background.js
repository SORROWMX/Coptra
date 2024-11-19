document.addEventListener('DOMContentLoaded', function() {
    const updateParticlesColor = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const color = '#ff6b6b';
        
        if (window.pJSDom && window.pJSDom[0]) {
            const particles = window.pJSDom[0].pJS;
            particles.particles.color.value = color;
            particles.particles.line_linked.color = color;
            
            particles.particles.array.forEach(particle => {
                particle.color.value = color;
            });
            
            particles.particles.line_linked.color_rgb_line = { r: 255, g: 107, b: 107 };
        }
    };

    const particlesConfig = {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 600
                }
            },
            color: {
                value: '#ff6b6b'
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0
                }
            },
            opacity: {
                value: 0.6,
                random: false,
                anim: {
                    enable: true,
                    speed: 3,
                    opacity_min: 0.4,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 1.5,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff6b6b',
                opacity: 0.3,
                width: 1.2
            },
            move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
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
                    enable: false
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                }
            }
        },
        retina_detect: true
    };

    if (typeof particlesJS !== 'undefined') {
        particlesJS('background-particles', particlesConfig);
    }

    document.addEventListener('themeChanged', updateParticlesColor);
}); 