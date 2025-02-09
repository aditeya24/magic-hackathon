document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const phoneInput = document.getElementById('phone');
    const ageInput =document.getElementById('age');
    const submitButton = document.getElementById('submitButton');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const phoneError = document.getElementById('phoneError');
    const ageError = document.getElementById('ageError');

    const validateNmae = () => {
        const name = nameInput.value;
        const isValid = /^[A-Za-z]+$/.test(name);
        nameInput.classList.toggle('valid', isValid);
        nameInput.classList.toggle('invalid', !isValid);
        nameError.style.display = isValid ? 'none' : 'block';
        return isValid;
    };

    const validateEmail = () => {
        const email = emailInput.value;
        const isValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(email);
        emailInput.classList.toggle('valid', isValid);
        emailInput.classList.toggle('invalid', !isValid);
        emailError.style.display = isValid ? 'none' : 'block';
        return isValid;
    };

    const validatePassword = () => {
        const password = passwordInput.value;
        const isValid = password.length >= 8;
        passwordInput.classList.toggle('valid', isValid);
        passwordInput.classList.toggle('invalid', !isValid);
        passwordError.style.display = isValid ? 'none' : 'block';
        return isValid;
    };
    const validateConfirmPassword = () => {
        const confirmPassword = confirmPasswordInput.value;
        const isValid = confirmPassword === passwordInput.value;
        confirmPasswordInput.classList.toggle('valid', isValid);
        confirmPasswordInput.classList.toggle('invalid', !isValid);
        confirmPasswordError.style.display = isValid ? 'none' : 'block';
        return isValid;
    };
    const validatePhone = () => {
        const phone = phoneInput.value;
        const isValid = /^\d{10}$/.test(phone);
        phoneInput.classList.toggle('valid', isValid);
        phoneInput.classList.toggle('invalid', !isValid);
        phoneError.style.display = isValid ? 'none' : 'block';
        return isValid;
    };
    const validateAge = () => {
        const age = ageInput.value;
        const isValid = age >= 18;
        ageInput.classList.toggle('valid', isValid);
        ageInput.classList.toggle('invalid', !isValid);
        ageError.style.display = isValid ? 'none' : 'block';
        return isValid;
    };

    const validateForm = () => {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneValid = validatePhone();
        const isAgeValid = validateAge();
        submitButton.disabled = !(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid && isAgeValid);
    };

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    phoneInput.addEventListener('input', validatePhone);
    ageInput.addEventListener('input', validateAge);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
    });
});

