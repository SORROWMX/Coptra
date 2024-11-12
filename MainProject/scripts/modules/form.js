export const FormModule = {
    init() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        this.initPhoneInput();
        this.initFormValidation(form);
    },

    initPhoneInput() {
        const phoneInput = document.getElementById('phone');
        if (!phoneInput) return;

        let phoneMask = null;

        const initMask = () => {
            phoneMask = IMask(phoneInput, {
                mask: '+{7} (000) 000-00-00',
                lazy: true,
                placeholderChar: '_'
            });
            phoneInput.value = '+7';
        };

        const destroyMask = () => {
            if (phoneMask) {
                phoneMask.destroy();
                phoneMask = null;
                if (phoneInput.value === '+7') {
                    phoneInput.value = '';
                }
            }
        };

        phoneInput.addEventListener('focus', () => {
            if (!phoneMask) {
                initMask();
                requestAnimationFrame(() => {
                    phoneInput.setSelectionRange(2, 2);
                });
            }
        });

        phoneInput.addEventListener('blur', () => {
            const valueWithoutMask = phoneInput.value.replace(/[^\d+]/g, '');
            if (valueWithoutMask === '+7' || !valueWithoutMask) {
                destroyMask();
                phoneInput.classList.remove('invalid', 'valid');
                const formGroup = phoneInput.closest('.form-group');
                formGroup.classList.remove('error');
                const errorMessage = formGroup.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });

        phoneInput.addEventListener('input', () => {
            const value = phoneInput.value.replace(/\D/g, '');
            const isValid = value.length === 11;
            
            phoneInput.classList.toggle('invalid', !isValid && value.length > 1);
            phoneInput.classList.toggle('valid', isValid);
            
            const formGroup = phoneInput.closest('.form-group');
            formGroup.classList.toggle('error', !isValid && value.length > 1);
            
            let errorMessage = formGroup.querySelector('.error-message');
            if (!isValid && value.length > 1) {
                if (!errorMessage) {
                    errorMessage = document.createElement('span');
                    errorMessage.className = 'error-message';
                    formGroup.appendChild(errorMessage);
                }
                errorMessage.textContent = 'Введите корректный номер телефона';
            } else if (errorMessage) {
                errorMessage.remove();
            }
        });
    },

    initFormValidation(form) {
        const submitButton = form.querySelector('.submit-button');
        const inputs = form.querySelectorAll('input, textarea, select');
        const checkbox = form.querySelector('input[type="checkbox"]');

        submitButton.disabled = true;
        submitButton.classList.add('disabled');

        const validateForm = () => {
            const isValid = Array.from(inputs).every(input => {
                if (input.type === 'checkbox') {
                    return input.checked;
                }
                if (input.type === 'tel') {
                    return input.value.replace(/\D/g, '').length === 11;
                }
                return input.value.trim() !== '';
            });

            submitButton.disabled = !isValid;
            submitButton.classList.toggle('disabled', !isValid);
        };

        inputs.forEach(input => {
            input.addEventListener('input', validateForm);
            input.addEventListener('change', validateForm);
        });

        checkbox.addEventListener('change', validateForm);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!submitButton.disabled) {
                console.log('Form submitted');
            }
        });
    }
}; 