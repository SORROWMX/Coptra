document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        let timeout;

        const showMenu = () => {
            clearTimeout(timeout);
            dropdown.classList.add('active');
            menu.style.display = 'block';
        };

        const hideMenu = () => {
            timeout = setTimeout(() => {
                dropdown.classList.remove('active');
                menu.style.display = 'none';
            }, 100);
        };

        dropdown.addEventListener('mouseenter', showMenu);
        dropdown.addEventListener('mouseleave', hideMenu);

        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (menu.style.display === 'block') {
                hideMenu();
            } else {
                showMenu();
            }
        });

        // Закрываем меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                hideMenu();
            }
        });
    });

    // Параллакс эффект
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.documentElement.style.setProperty('--scroll-y', `${scrollY * 0.5}px`);
    });

    // Прогресс-бар прокрутки
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    let ticking = false;
    const updateProgressBar = () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.pageYOffset / scrollTotal) * 100;
        progressBar.style.width = `${scrollProgress}%`;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgressBar);
            ticking = true;
        }
    });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // Кнопка "Наверх"
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '&#8593;'; // Стрелка вверх
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    const toggleScrollToTopButton = () => {
        if (window.scrollY > scrollThreshold) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Функциональность FAQ
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
    
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
    
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
    
                // Закрываем все другие ответы
                faqItems.forEach(q => {
                    q.classList.remove('active');
                    q.querySelector('.faq-answer').style.maxHeight = null;
                    q.querySelector('.faq-toggle').style.transform = 'rotate(0deg)';
                });
    
                // Открываем или закрываем текущий ответ
                if (!isActive) {
                    item.classList.add('active');
                    // Добавляем дополнительные 40px для нижнего отступа
                    answer.style.maxHeight = (answer.scrollHeight + 20) + 'px';
                    toggle.style.transform = 'rotate(180deg)';
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                    toggle.style.transform = 'rotate(0deg)';
                }
            });
        });
    }

    // Код для секции "О компании"
    function initAboutSection() {
        // Параллакс эффект для фона
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            });
        }

        // Анимация появления элементов
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-transition').forEach(section => {
            observer.observe(section);
        });

        // Анимация счетчиков
        const animateValue = (obj, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observerFacts = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const factNumber = entry.target.querySelector('.fact-number');
                    const endValue = parseInt(entry.target.dataset.count);
                    if (!isNaN(endValue)) {
                        animateValue(factNumber, 0, endValue, 2000);
                    } else {
                        console.warn('Invalid data-count value:', entry.target.dataset.count);
                        factNumber.textContent = '0';
                    }
                    observerFacts.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.fact-card').forEach(card => observerFacts.observe(card));

        // Увеличение изображения при клике
        const aboutImage = document.querySelector('.about-image img');
        if (aboutImage) {
            aboutImage.addEventListener('click', () => {
                aboutImage.classList.toggle('enlarged');
            });
        }
    }

    // Вызываем функцию инициализации секции "О компании"
    initAboutSection();

    initFAQ();

    const applicationCards = document.querySelectorAll('.application-card');
    let expandedCard = null;

    applicationCards.forEach(card => {
        card.addEventListener('click', () => {
            if (expandedCard === card) {
                collapseCard(card);
            } else {
                if (expandedCard) {
                    collapseCard(expandedCard);
                }
                expandCard(card);
            }
        });
    });

    function expandCard(card) {
        expandedCard = card;
        card.classList.add('expanded');
        // applicationCards.forEach(c => {
        //     if (c !== card) {
        //         c.classList.add('hidden');
        //     }
        // });
    }

    function collapseCard(card) {
        card.classList.remove('expanded');
        // applicationCards.forEach(c => {
        //     c.classList.remove('hidden');
        // });
        expandedCard = null;
    }

    initTestimonials();
});

function animateCounter(el, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const el = entry.target.querySelector('.fact-number');
            const endValue = parseInt(entry.target.dataset.count, 10);

            // Проверяем, если endValue не является числом, выводим предупреждение
            if (!isNaN(endValue)) {
                animateCounter(el, 0, endValue, 2000);
            } else {
                console.warn('Invalid data-count value:', entry.target.dataset.count);
                el.textContent = '0';  // Можно установить 0 или другое значение по умолчанию
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fact-card').forEach(card => observer.observe(card));
});

function initTestimonials() {
    const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            }
        }
    });

    swiper.on('slideChange', function () {
        swiper.pagination.render();
        swiper.pagination.update();
    });

    let userInteracted = false;

    swiper.on('touchStart', function () {
        userInteracted = true;
        swiper.autoplay.stop();
    });

    swiper.on('transitionEnd', function () {
        if (userInteracted) {
            swiper.autoplay.start();
            userInteracted = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', initTestimonials);
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, находимся ли мы на странице /docs/index.php
    if (window.location.pathname.endsWith('/docs/index.php')) {
        const expandableItems = document.querySelectorAll('.sidebar-expandable');
        
        if (expandableItems.length > 0) {
            expandableItems.forEach(item => {
                const mainLink = item.querySelector('.sidebar-link');
                const submenu = item.querySelector('.sidebar-submenu');
                
                if (mainLink && submenu) {
                    mainLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        item.classList.toggle('active');
                        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                    });
                    
                    // Prevent submenu from closing when clicking on submenu items
                    submenu.addEventListener('click', function(e) {
                        e.stopPropagation();
                    });
                }
            });
        }
    }
});
// Инициализация счетчиков фактов
const factCounts = {
    'clients': 100,
    'drones': 3,
    'founded': 2024,
    'experts': 20
};

function initFactCounters() {
    document.querySelectorAll('.fact-card').forEach(card => {
        const factNumber = card.querySelector('.fact-number');
        const factKey = card.getAttribute('data-fact-key');
        if (factNumber && factKey && factCounts.hasOwnProperty(factKey)) {
            const endValue = factCounts[factKey];
            animateCounter(factNumber, 0, endValue, 2000);
        }
    });
}

document.addEventListener('DOMContentLoaded', initFactCounters);