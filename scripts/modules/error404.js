export const Error404Module = {
    init() {
        // Проверяем, что мы на странице 404
        if (!document.querySelector('.error-container')) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            if (typeof particlesJS === 'undefined') {
                console.error('particles.js не загружен');
                resolve();
                return;
            }

            const particlesContainer = document.getElementById('particles-js-404');
            if (!particlesContainer) {
                resolve();
                return;
            }

            try {
                // Удаляем существующие частицы, если они есть
                if (window.pJSDom && window.pJSDom.length > 0) {
                    window.pJSDom.forEach(dom => {
                        if (dom.pJS) {
                            dom.pJS.fn.vendors.destroypJS();
                            window.pJSDom = [];
                        }
                    });
                }

                particlesJS('particles-js-404', {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()
                        },
                        shape: {
                            type: 'circle'
                        },
                        opacity: {
                            value: 0.5,
                            random: false
                        },
                        size: {
                            value: 3,
                            random: true
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim(),
                            opacity: 0.2,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab'
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
                });

                // Фиксим размеры canvas
                const setCanvasSize = () => {
                    const canvas = document.querySelector('#particles-js-404 canvas');
                    if (canvas) {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                    }
                };

                setCanvasSize();
                window.addEventListener('resize', setCanvasSize);
                resolve();
            } catch (error) {
                console.error('Ошибка инициализации particles.js:', error);
                resolve();
            }
        });
    }
};

// Добавляем обработчик изменения темы
document.addEventListener('themeChanged', () => {
    if (window.pJSDom && window.pJSDom[0]) {
        const particles = window.pJSDom[0].pJS;
        const newColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
        
        particles.particles.color.value = newColor;
        particles.particles.line_linked.color = newColor;
        
        particles.particles.array.forEach(particle => {
            particle.color.value = newColor;
        });
    }
});