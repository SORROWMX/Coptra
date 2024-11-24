export const ProductModal = {
    init() {
        this.modal = document.getElementById('productModal');
        if (!this.modal) return;

        this.overlay = this.modal.querySelector('.product-modal__overlay');
        this.closeBtn = this.modal.querySelector('.product-modal__close');
        this.addBtn = document.querySelector('.product-compare__add-btn');
        this.categories = this.modal.querySelectorAll('.product-modal__category');
        
        this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty('--scrollbar-width', `${this.scrollbarWidth}px`);

        this.bindEvents();
        this.initCategories();
    },

    bindEvents() {
        // Открытие модального окна
        this.addBtn?.addEventListener('click', () => this.open());
        
        // Закрытие модального окна
        this.closeBtn?.addEventListener('click', () => this.close());
        this.overlay?.addEventListener('click', () => this.close());
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    },

    initCategories() {
        this.categories.forEach(category => {
            category.addEventListener('click', () => {
                this.categories.forEach(c => c.classList.remove('active'));
                category.classList.add('active');
                this.loadProducts(category.dataset.category);
            });
        });
    },
    
    open() {
        this.modal.classList.add('active');
        document.documentElement.classList.add('modal-open');
        
        // Сохраняем текущую позицию скролла
        this.scrollPosition = window.pageYOffset;
        document.documentElement.style.top = `-${this.scrollPosition}px`;
    },
    
    close() {
        this.modal.classList.remove('active');
        document.documentElement.classList.remove('modal-open');
        
        // Восстанавливаем позицию скролла
        document.documentElement.style.top = '';
        window.scrollTo(0, this.scrollPosition);
    },
    
    loadProducts(category) {
        const productsContainer = this.modal.querySelector('.product-modal__products');
        // Здесь будет логика загрузки продуктов по категории
    }
}; 