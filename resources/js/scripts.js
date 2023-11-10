document.querySelector('form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var verifyEmail = document.getElementById('verifyEmail').value;
    const isEmailCharacter = "@";

    if (email.indexOf(isEmailCharacter) == -1) {
        alert('The email address must contain @');
        event.preventDefault();
    }

    if (verifyEmail.indexOf(isEmailCharacter) == -1) {
        alert('The email address must contain @');
        event.preventDefault();
    }

    if (email !== verifyEmail) {
        alert('The emails do not match.');
        event.preventDefault();
    }
    else
        alert('Thank you for submitting the form.');

});