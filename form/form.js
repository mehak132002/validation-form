document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validation criteria
    if (fullName.length < 5) {
        showError('Full name must be at least 5 characters');
        return;
    }

    if (!email.includes('@')) {
        showError('Enter a valid email address');
        return;
    }

    if (!/^\d{10}$/.test(phoneNumber) || phoneNumber === '123456789') {
        showError('Enter a valid 10-digit phone number');
        return;
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
        showError('Password must be at least 8 characters and not be "password" or your name');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    // If all validations pass, show success message
    showSuccess('Form submitted successfully!');
}

function showError(message) {
    alert('Error: ' + message);
}

function showSuccess(message) {
    alert('Success: ' + message);
}
