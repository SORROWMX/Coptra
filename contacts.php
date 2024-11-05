<?php include 'modules/header.php'; ?>

<main class="content">
    <section class="contact-hero">
        <div id="hero-map" class="contact-hero__map"></div>
        <div class="container">
            <div class="contact-hero__address">
                <div class="address-card">
                    <h3>Главный офис</h3>
                    <div class="address-info">
                        <p><i class="fas fa-map-marker-alt"></i> г. Орёл, ул. Наугорское шоссе, 29</p>
                        <p><i class="fas fa-clock"></i> Пн-Пт: 9:00 - 18:00</p>
                        <p><i class="fas fa-phone"></i> +7 (123) 456-78-90</p>
                        <p><i class="fas fa-envelope"></i> info@koptra.ru</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-form-section">
        <div class="container">
            <h2>Связаться с нами</h2>
            <div class="contact-content">
                <div class="contact-form">
                    <form id="contact-form">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Ваше имя" required>
                            <label for="name">Ваше имя</label>
                        </div>

                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required>
                            <label for="email">Email</label>
                        </div>

                        <div class="form-group">
                            <input type="tel" id="phone" name="phone" placeholder="Номер телефона" required>
                            <label for="phone">Номер телефона</label>
                        </div>

                        <div class="form-group">
                            <select id="topic" name="topic" required>
                                <option value="" disabled selected hidden></option>
                                <option value="general">Общий вопрос</option>
                                <option value="support">Техническая поддержка</option>
                                <option value="order">Заказ продукции</option>
                                <option value="partnership">Партнерство</option>
                            </select>
                            <label for="topic">Тема сообщения</label>
                        </div>

                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Ваше сообщение" required></textarea>
                            <label for="message">Ваше сообщение</label>
                        </div>

                        <div class="form-footer">
                            <div class="checkbox-container">
                                <input type="checkbox" id="privacy" required>
                                <label for="privacy">Согласен с <a href="#">политикой конфидециальности</a></label>
                            </div>
                            <button type="submit" class="submit-button">
                                <span>Отправить сообщение</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="contact-additional">
                    <div class="contact-info">
                        <div class="info-block">
                            <div class="info-header">
                                <i class="fas fa-comments"></i>
                                <h3>Онлайн-консультация</h3>
                            </div>
                            <div class="consultation-info">
                                <div class="messenger-item">
                                    <i class="fab fa-telegram"></i>
                                    <div>
                                        <a href="#" class="messenger-link">Telegram-бот</a>
                                        <span>Быстрые ответы 24/7</span>
                                    </div>
                                </div>
                                <div class="messenger-item">
                                    <i class="fab fa-vk"></i>
                                    <div>
                                        <a href="#" class="messenger-link">Сообщество VK</a>
                                        <span>Новости и консультации</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="info-block">
                            <div class="info-header">
                                <i class="fas fa-file-contract"></i>
                                <h3>Документация</h3>
                            </div>
                            <div class="docs-info">
                                <div class="doc-item">
                                    <i class="fas fa-file-pdf"></i>
                                    <a href="#">Инструкции по эксплуатации</a>
                                </div>
                                <div class="doc-item">
                                    <i class="fas fa-file-pdf"></i>
                                    <a href="#">Схемы подключения</a>
                                </div>
                                <div class="doc-item">
                                    <i class="fas fa-file-pdf"></i>
                                    <a href="#">Сертификаты качества</a>
                                </div>
                            </div>
                        </div>

                        <div class="info-block">
                            <div class="info-header">
                                <i class="fas fa-headset"></i>
                                <h3>Поддержка</h3>
                            </div>
                            <div class="support-contacts">
                                <a href="tel:+71234567891" class="contact-link">
                                    <i class="fas fa-phone"></i>
                                    +7 (123) 456-78-91
                                </a>
                                <a href="mailto:support@koptra.ru" class="contact-link">
                                    <i class="fas fa-envelope"></i>
                                    support@koptra.ru
                                </a>
                            </div>
                        </div>

                        <div class="social-links">
                            <a href="#" class="social-link vk">
                                <i class="fab fa-vk"></i>
                            </a>
                            <a href="#" class="social-link telegram">
                                <i class="fab fa-telegram"></i>
                            </a>
                            <a href="#" class="social-link youtube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'modules/footer.php'; ?>