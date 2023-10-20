let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('#form');
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        const checkbox = document.querySelector('input[type="checkbox"]');
        const signUpButton = document.querySelector('.signup-btn');

        signUpButton.addEventListener('click', function () {
            // Check if email and password are not empty
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Check if the email contains the '@' symbol
            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }

            // Check if the password has a minimum length (e.g., 6 characters)
            if (password.length < 6) {
                alert('Password must be at least 6 characters long. It must include symbols, numbers, and capital letters. For Example (Abc123@$#Hiuv)');
                return;
            }

             // Check if the password includes symbols, numbers, and capital letters
             if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password) ||
             !/\d+/.test(password) ||
             !/[A-Z]+/.test(password)) {
             alert('Password must be at least 6 characters long. It must include atleast one symbol, number, and a capital letter. For Example (Abc123@$#Hiuv)');
             return;
         }

            // Check if the checkbox is checked
            if (!checkbox.checked) {
                alert('Please agree to the terms of services.');
                return;
            }

            // If all checks pass, you can submit the form
            alert('Sign up successful');
            // Add your form submission logic here
        });
    });

