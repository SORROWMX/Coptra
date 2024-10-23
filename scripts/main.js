// Constants
const CONSTANTS = {
    SCROLL_THRESHOLD: 50,
    ANIMATION_DURATION: 2000,
    DROPDOWN_DELAY: 100,
    FACT_COUNTS: {
        clients: 100,
        drones: 3,
        founded: 2024,
        experts: 20
    }
};

// Utility functions
const utils = {
    animateValue: (element, start, end, duration) => {
        if (!element) {
            return;
        }

        element.textContent = start;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            
            element.textContent = currentValue;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        };
        
        window.requestAnimationFrame(step);
    },

    createIntersectionObserver: (callback, options = {}) => {
        return new IntersectionObserver(callback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
            ...options
        });
    }
};

// Header Module
const HeaderModule = {
    init() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > CONSTANTS.SCROLL_THRESHOLD);
        });
    }
};

// Dropdown Module
const DropdownModule = {
    init() {
        document.querySelectorAll('.dropdown').forEach(this.setupDropdown);
    },

    setupDropdown(dropdown) {
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
            }, CONSTANTS.DROPDOWN_DELAY);
        };

        dropdown.addEventListener('mouseenter', showMenu);
        dropdown.addEventListener('mouseleave', hideMenu);
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menu.style.display === 'block' ? hideMenu() : showMenu();
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) hideMenu();
        });
    }
};

// Scroll Progress Module
const ScrollProgressModule = {
    init() {
        const progressBar = document.createElement('div');
        progressBar.classList.add('scroll-progress');
        document.body.appendChild(progressBar);

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollProgress = (window.pageYOffset / scrollTotal) * 100;
                    progressBar.style.width = `${scrollProgress}%`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
};

// FAQ Module
const FAQModule = {
    init() {
        document.querySelectorAll('.faq-item').forEach(this.setupFAQItem);
    },

    setupFAQItem(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(q => {
                q.classList.remove('active');
                q.querySelector('.faq-answer').style.maxHeight = null;
                q.querySelector('.faq-toggle').style.transform = 'rotate(0deg)';
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = `${answer.scrollHeight + 20}px`;
                toggle.style.transform = 'rotate(180deg)';
            }
        });
    }
};

// About Section Module
const AboutSectionModule = {
    init() {
        this.initParallax();
        this.initAnimations();
        this.initFactCounters();
        this.initImageZoom();
    },

    initParallax() {
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            window.addEventListener('scroll', () => {
                parallaxBg.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
            });
        }
    },

    initAnimations() {
        const observer = utils.createIntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.section-transition').forEach(section => {
            observer.observe(section);
        });
    },

    initFactCounters() {
        const observer = utils.createIntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const factNumber = entry.target.querySelector('.fact-number');
                    const allFactCards = document.querySelectorAll('.fact-card');
                    const index = Array.from(allFactCards).indexOf(entry.target);
                    const factTypes = Object.keys(CONSTANTS.FACT_COUNTS);
                    const factType = factTypes[index];
                    const endValue = CONSTANTS.FACT_COUNTS[factType];
                    
                    if (endValue !== undefined && factNumber) {
                        utils.animateValue(factNumber, 0, endValue, CONSTANTS.ANIMATION_DURATION);
                        observer.unobserve(entry.target);
                    }
                }
            });
        });

        const factCards = document.querySelectorAll('.fact-card');
        if (factCards.length > 0) {
            factCards.forEach(card => observer.observe(card));
        }
    },
    initImageZoom() {
        const aboutImage = document.querySelector('.about-image img');
        if (aboutImage) {
            aboutImage.addEventListener('click', () => {
                aboutImage.classList.toggle('enlarged');
            });
        }
    }
};

// Testimonials Module
const TestimonialsModule = {
    init() {
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

        this.setupSwiperEvents(swiper);
    },

    setupSwiperEvents(swiper) {
        let userInteracted = false;

        swiper.on('slideChange', () => {
            swiper.pagination.render();
            swiper.pagination.update();
        });

        swiper.on('touchStart', () => {
            userInteracted = true;
            swiper.autoplay.stop();
        });

        swiper.on('transitionEnd', () => {
            if (userInteracted) {
                swiper.autoplay.start();
                userInteracted = false;
            }
        });
    }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    HeaderModule.init();
    DropdownModule.init();
    ScrollProgressModule.init();
    FAQModule.init();
    AboutSectionModule.init();
    TestimonialsModule.init();
});

// Добавьте этот код в main.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // Закрытие меню при клике на пункт меню
    const menuItems = document.querySelectorAll('.main-nav a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Обновленный код для сайдбара
    const sidebarMobileBtn = document.querySelector('.sidebar-mobile-btn');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarMobileBtn && sidebar) {
        sidebarMobileBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            sidebar.classList.toggle('active');
            
            // Добавляем класс для блокировки прокрутки body
            document.body.classList.toggle('sidebar-open');
        });

        // Закрытие сайдбара при клике вне его области
        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && 
                !sidebarMobileBtn.contains(event.target) && 
                sidebar.classList.contains('active')) {
                sidebarMobileBtn.classList.remove('active');
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });

        // Закрытие сайдбара при клике на ссылку
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebarMobileBtn.classList.remove('active');
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            });
        });
    }
});
