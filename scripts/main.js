document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    initializeHeader();
    initializeDropdowns();
    initializeParallaxEffect();
    initializeScrollProgressBar();
    initializeScrollToTopButton();
    initializeFAQ();
    initializeAboutSection();
    initializeApplicationCards();
    initializeTestimonials();
    initializeFactCounters();
    initializeSidebar();
}

function initializeHeader() {
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    });
}

function initializeDropdowns() {
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
            menu.style.display === 'block' ? hideMenu() : showMenu();
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) hideMenu();
        });
    });
}

function initializeParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.documentElement.style.setProperty('--scroll-y', `${scrollY * 0.5}px`);
    });
}

function initializeScrollProgressBar() {
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
}

function initializeScrollToTopButton() {
    const scrollThreshold = 50;
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '&#8593;';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    const toggleScrollToTopButton = () => {
        scrollToTopButton.classList.toggle('visible', window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(q => {
                q.classList.remove('active');
                q.querySelector('.faq-answer').style.maxHeight = null;
                q.querySelector('.faq-toggle').style.transform = 'rotate(0deg)';
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = (answer.scrollHeight + 20) + 'px';
                toggle.style.transform = 'rotate(180deg)';
            }
        });
    });
}

function initializeAboutSection() {
    initializeParallaxBackground();
    initializeAnimatedSections();
    initializeFactCounters();
    initializeImageEnlargement();
}

function initializeParallaxBackground() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
}

function initializeAnimatedSections() {
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
}

function initializeFactCounters() {
    const factCounts = {
        'clients': 100,
        'drones': 3,
        'founded': 2024,
        'experts': 20
    };

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

    document.querySelectorAll('.fact-card').forEach(card => {
        const factNumber = card.querySelector('.fact-number');
        const factKey = card.getAttribute('data-fact-key');
        if (factNumber && factKey && factCounts.hasOwnProperty(factKey)) {
            const endValue = factCounts[factKey];
            animateValue(factNumber, 0, endValue, 2000);
        }
    });
}

function initializeImageEnlargement() {
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        aboutImage.addEventListener('click', () => {
            aboutImage.classList.toggle('enlarged');
        });
    }
}

function initializeApplicationCards() {
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
    }

    function collapseCard(card) {
        card.classList.remove('expanded');
        expandedCard = null;
    }
}

function initializeTestimonials() {
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

    swiper.on('slideChange', () => {
        swiper.pagination.render();
        swiper.pagination.update();
    });

    let userInteracted = false;

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

function initializeSidebar() {
    if (window.location.pathname.endsWith('/docs/index.php')) {
        const expandableItems = document.querySelectorAll('.sidebar-expandable');
        
        if (expandableItems.length > 0) {
            expandableItems.forEach(item => {
                const mainLink = item.querySelector('.sidebar-link');
                const submenu = item.querySelector('.sidebar-submenu');
                
                if (mainLink && submenu) {
                    mainLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        item.classList.toggle('active');
                        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                    });
                    
                    submenu.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }
            });
        }
    }
}