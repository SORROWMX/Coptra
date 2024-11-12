export const MobileMenuModule = {
    init() {
        this.dropdowns = document.querySelectorAll('.dropdown');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.mainNav = document.querySelector('.main-nav');
        this.dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

        if (!this.mobileMenuBtn || !this.mainNav) return;

        this.setupEventListeners();
    },

    setupEventListeners() {
        this.mobileMenuBtn.addEventListener('click', () => {
            this.mobileMenuBtn.classList.toggle('active');
            this.mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');

            if (!this.mainNav.classList.contains('active')) {
                this.closeAllMenus();
            }
        });

        this.dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.dropdown-toggle');
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggleDropdown(dropdown);
                });
            }
        });

        this.dropdownSubmenus.forEach(submenu => {
            const link = submenu.querySelector('a');
            if (link) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.toggleSubmenu(submenu);
                    }
                });
            }
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth > 768 && !e.target.closest('.dropdown')) {
                this.closeAllMenus();
            }
        });
    },

    toggleDropdown(dropdown) {
        const isActive = dropdown.classList.contains('active');
        
        if (window.innerWidth <= 768) {
            this.closeOtherDropdowns(dropdown);
            dropdown.classList.toggle('active');
            
            if (!isActive) {
                this.closeAllSubmenus(dropdown);
            }
        } else {
            if (isActive) {
                dropdown.classList.remove('active');
            } else {
                this.closeAllMenus();
                dropdown.classList.add('active');
            }
        }
    },

    toggleSubmenu(submenu) {
        if (window.innerWidth <= 768) {
            const isActive = submenu.classList.contains('active');
            
            const siblings = submenu.parentElement.querySelectorAll('.dropdown-submenu');
            siblings.forEach(sibling => {
                if (sibling !== submenu) {
                    sibling.classList.remove('active');
                }
            });

            submenu.classList.toggle('active');
        }
    },

    closeAllMenus() {
        this.dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            this.closeAllSubmenus(dropdown);
        });
    },

    closeOtherDropdowns(currentDropdown) {
        this.dropdowns.forEach(dropdown => {
            if (dropdown !== currentDropdown && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                this.closeAllSubmenus(dropdown);
            }
        });
    },

    closeAllSubmenus(dropdown) {
        const submenus = dropdown.querySelectorAll('.dropdown-submenu');
        submenus.forEach(submenu => submenu.classList.remove('active'));
    }
}; 