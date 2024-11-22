// Импорт констант и утилит
import { CONSTANTS } from './modules/constants.js';
import { utils } from './modules/utils.js';

// Импорт основных модулей
import { HeaderModule } from './modules/header.js';
import { ThemeModule } from './modules/theme.js';
import { ScrollProgressModule } from './modules/scroll-progress.js';
import { AboutSectionModule } from './modules/about-section.js';
import { TestimonialsModule } from './modules/testimonials.js';
import { FormModule } from './modules/form.js';
import { MobileMenuModule } from './modules/mobile-menu.js';
import { NavigationModule } from './modules/navigation.js';
import { MapModule } from './modules/map.js';
import { SidebarModule } from './modules/sidebar.js';
import { PreloaderModule } from './modules/preloader.js';
import { ScrollToTopModule } from './modules/scroll-to-top.js';
import { LazyLoadingModule } from './modules/lazy-loading.js';
import { ApplicationsModule } from './modules/applications.js';
import { HeroMapModule } from './modules/hero-map.js';
import { BlogModule } from './modules/blog.js';

// Импорт модулей анимаций
import { HeroAnimationModule } from './modules/animations/hero.js';
import { AboutAnimationModule } from './modules/animations/about.js';
import { ProductsAnimationModule } from './modules/animations/products.js';
import { AdvantagesAnimationModule } from './modules/animations/advantages.js';
import { NewsAnimationModule } from './modules/animations/news.js';
import { PartnersAnimationModule } from './modules/animations/partners.js';
import { FAQAnimationModule } from './modules/animations/faq.js';
import { TelegramAnimationModule } from './modules/animations/telegram.js';
import { ContactAnimationModule } from './modules/animations/contact.js';
import { GoalsAnimationModule } from './modules/animations/goals.js';

// Импорт дополнительных модулей
import { ParticlesModule } from './modules/particles.js';
import { SearchModule } from './modules/search.js';

// Функция для проверки и инициализации модуля
const initializeModule = async (module, moduleName) => {
    try {
        if (module && typeof module.init === 'function') {
            await module.init();
        }
    } catch (error) {
        console.error(`Error in ${moduleName}:`, error);
    }
};

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initializeModule(PreloaderModule, 'PreloaderModule');
        await initializeModule(LazyLoadingModule, 'LazyLoadingModule');
        await initializeModule(SearchModule, 'SearchModule');
        
        // Проверяем, не находимся ли мы на странице логина
        const isLoginPage = document.querySelector('.login-page') !== null;
        
        const mainModules = [
            [ThemeModule, 'ThemeModule'],
            [HeaderModule, 'HeaderModule'],
            [MobileMenuModule, 'MobileMenuModule'],
            [NavigationModule, 'NavigationModule'],
            // Инициализируем эти модули только если это не страница логина
            ...(!isLoginPage ? [
                [ScrollProgressModule, 'ScrollProgressModule'],
                [ScrollToTopModule, 'ScrollToTopModule'],
            ] : []),
            [AboutSectionModule, 'AboutSectionModule'],
            [TestimonialsModule, 'TestimonialsModule'],
            [FormModule, 'FormModule'],
            [MapModule, 'MapModule'],
            [SidebarModule, 'SidebarModule'],
            [ApplicationsModule, 'ApplicationsModule'],
            [HeroMapModule, 'HeroMapModule'],
            [BlogModule, 'BlogModule']
        ];

        for (const [module, name] of mainModules) {
            await initializeModule(module, name);
        }
        
        const animationModules = [
            [HeroAnimationModule, 'HeroAnimationModule'],
            [AboutAnimationModule, 'AboutAnimationModule'],
            [ProductsAnimationModule, 'ProductsAnimationModule'],
            [AdvantagesAnimationModule, 'AdvantagesAnimationModule'],
            [NewsAnimationModule, 'NewsAnimationModule'],
            [PartnersAnimationModule, 'PartnersAnimationModule'],
            [FAQAnimationModule, 'FAQAnimationModule'],
            [TelegramAnimationModule, 'TelegramAnimationModule'],
            [ContactAnimationModule, 'ContactAnimationModule'],
            [GoalsAnimationModule, 'GoalsAnimationModule']
        ];

        for (const [module, name] of animationModules) {
            await initializeModule(module, name);
        }
        
        await initializeModule(ParticlesModule, 'ParticlesModule');

        const currentYear = document.querySelector('#current-year');
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error('Critical initialization error:', error);
    }
});


window.addEventListener('unhandledrejection', (event) => {
    console.error('Необработанное отклонение промиса:', event.reason);
});

