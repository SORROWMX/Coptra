import { CONSTANTS } from './constants.js';

export const HeaderModule = {
    init() {
        const header = document.querySelector('header');
        if (!header) return;

        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');

        // Обработчик прокрутки
        window.addEventListener('scroll', () => {
            if (!mainNav?.classList.contains('active')) { // Проверяем, не открыто ли меню
                header.classList.toggle('scrolled', window.scrollY > CONSTANTS.SCROLL_THRESHOLD);
            }
        });

        // Обработчик мобильного меню
        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', () => {
                const isOpening = !mainNav.classList.contains('active');
                
                mobileMenuBtn.classList.toggle('active');
                mainNav.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                if (!isOpening) {
                    header.classList.remove('scrolled');
                } else if (window.scrollY > CONSTANTS.SCROLL_THRESHOLD) {
                    header.classList.add('scrolled');
                }
            });
        }

        // Обработка для обоих навигационных меню
        const navMenus = document.querySelectorAll('.docs-nav, .main-nav');
        
        navMenus.forEach(nav => {
            if (nav) {
                const dropdowns = nav.querySelectorAll('.dropdown');
                const activeStates = new Map();

                dropdowns.forEach(dropdown => {
                    const link = dropdown.querySelector('a');
                    const toggleArrow = dropdown.querySelector('.dropdown-toggle-arrow');
                    
                    if (toggleArrow) {
                        toggleArrow.addEventListener('click', (e) => {
                            if (window.innerWidth > 768) {
                                e.preventDefault();
                                e.stopPropagation();
                                
                                dropdowns.forEach(otherDropdown => {
                                    if (otherDropdown !== dropdown) {
                                        otherDropdown.classList.remove('active');
                                        activeStates.set(otherDropdown, false);
                                    }
                                });
                                
                                const isActive = !activeStates.get(dropdown);
                                activeStates.set(dropdown, isActive);
                                dropdown.classList.toggle('active', isActive);
                            }
                        });
                    }

                    // Обработчик для ссылки теперь просто позволяет переходить по ссылке
                    if (link) {
                        link.addEventListener('click', (e) => {
                            if (window.innerWidth <= 768) {
                                // На мобильных устройствах сохраняем текущее поведение
                                e.preventDefault();
                                dropdown.classList.toggle('active');
                            }
                            // На десктопе просто переходим по ссылке (стандартное поведение)
                        });
                    }

                    // Обработчики наведения мыши
                    dropdown.addEventListener('mouseenter', () => {
                        if (window.innerWidth > 768 && !activeStates.get(dropdown)) {
                            dropdown.classList.add('active');
                        }
                    });

                    dropdown.addEventListener('mouseleave', () => {
                        if (window.innerWidth > 768 && !activeStates.get(dropdown)) {
                            dropdown.classList.remove('active');
                        }
                    });
                });

                // Закрытие всех дропдаунов при клике вне
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.dropdown')) {
                        dropdowns.forEach(dropdown => {
                            dropdown.classList.remove('active');
                            activeStates.set(dropdown, false);
                        });
                    }
                });
            }
        });

        // Добавляем обработчик для якорных ссылок в меню
        document.addEventListener('DOMContentLoaded', () => {
            // Обрабатываем клики по якорным ссылкам
            const anchorLinks = document.querySelectorAll('a[href*="#"]');
            anchorLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href.includes('#')) {
                        const [pagePath, anchor] = href.split('#');
                        const currentPath = window.location.pathname;

                        // Если мы на той же странице
                        if (currentPath.endsWith(pagePath)) {
                            e.preventDefault();
                            const element = document.querySelector(`#${anchor}`);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                // Обновляем URL без перезагрузки страницы
                                window.history.pushState(null, '', `#${anchor}`);
                            }
                        }
                    }
                });
            });

            // Проверяем, есть ли в URL якорь после загрузки страницы
            setTimeout(() => {
                const hash = window.location.hash;
                if (hash) {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 500); // Увеличили задержку до 500мс
        });
    }
}; 

// Инициализация только после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    HeaderModule.init();
});