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

        const docsNav = document.querySelector('.docs-nav');
        if (docsNav) {
            const dropdowns = docsNav.querySelectorAll('.dropdown');
            const activeStates = new Map();

            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('a');
                if (link) {
                    link.addEventListener('click', (e) => {
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
                }
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.dropdown')) {
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                        activeStates.set(dropdown, false);
                    });
                }
            });
        }
    }
}; 

// Инициализация только после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    HeaderModule.init();
});