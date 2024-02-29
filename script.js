window.onload = function() {
    var loginDiv = document.querySelector('.login');

    // Create form element
    var form = document.createElement('form');
    form.setAttribute('id', 'loginForm');
    loginDiv.appendChild(form);

    // Create label and input for username
    var usernameLabel = document.createElement('label');
    usernameLabel.textContent = "Username:";
    form.appendChild(usernameLabel);

    var usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');
    form.appendChild(usernameInput);

    // Create label and input for password
    var passwordLabel = document.createElement('label');
    passwordLabel.textContent = "Password:";
    form.appendChild(passwordLabel);

    var passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    form.appendChild(passwordInput);

    // Create submit button
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = "Login";
    form.appendChild(submitButton);
};