import { CONSTANTS } from './constants.js';

export const HeaderModule = {
    init() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > CONSTANTS.SCROLL_THRESHOLD);
        });

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