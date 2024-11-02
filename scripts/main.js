// Импорт констант и утилит
import { CONSTANTS } from './modules/constants.js';
import { utils } from './modules/utils.js';

// Импорт основных модулей
import { HeaderModule } from './modules/header.js';
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
import { Error404Module } from './modules/error404.js';

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация утилит и базовых модулей
    PreloaderModule.init();
    LazyLoadingModule.init();
    
    // Инициализация основных модулей
    HeaderModule.init();
    MobileMenuModule.init();
    NavigationModule.init();
    ScrollProgressModule.init();
    ScrollToTopModule.init();
    AboutSectionModule.init();
    TestimonialsModule.init();
    FormModule.init();
    MapModule.init();
    SidebarModule.init();
    ApplicationsModule.init();
    
    // Инициализация модулей анимаций
    HeroAnimationModule.init();
    AboutAnimationModule.init();
    ProductsAnimationModule.init();
    AdvantagesAnimationModule.init();
    NewsAnimationModule.init();
    PartnersAnimationModule.init();
    FAQAnimationModule.init();
    TelegramAnimationModule.init();
    ContactAnimationModule.init();
    GoalsAnimationModule.init();
    
    // Инициализация дополнительных модулей
    ParticlesModule.init();
    Error404Module.init();

    // Установка текущего года
    const currentYear = document.querySelector('#current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});

