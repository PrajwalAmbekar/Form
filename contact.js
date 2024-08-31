document.getElementById('contact-form').addEventListener('submit', function(event) 
{
    event.preventDefault();

    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    if (firstName.value.trim() === '') {
        firstNameError.style.display = 'block';
        isValid = false;
    } 
    else 
    {
        firstNameError.style.display = 'none';
    }

    // Validate Last Name
    const lastName = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    if (lastName.value.trim() === '') {
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastNameError.style.display = 'none';
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate Query Type
    const queryTypeError = document.getElementById('query-type-error');
    const queryTypeSelected = document.querySelector('input[name="query-type"]:checked');
    if (!queryTypeSelected) {
        queryTypeError.style.display = 'block';
        isValid = false;
    } else {
        queryTypeError.style.display = 'none';
    }

    // Validate Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Validate Consent
    const consent = document.getElementById('consent');
    if (!consent.checked) {
        alert('You must consent to being contacted by the team.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add your form submission logic, such as sending the data to a server
        document.getElementById('contact-form').reset();
    }
});