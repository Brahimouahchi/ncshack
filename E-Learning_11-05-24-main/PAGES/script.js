const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  // Simple validation (replace with your server-side validation)
  if (usernameInput.value === '' || passwordInput.value === '') {
    errorMessage.textContent = 'Please enter username and password.';
    errorMessage.style.display = 'block';
    event.preventDefault(); // Prevent form submission if validation fails
  } else {
    // Assuming form submission is valid, remove any error message
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  }
});
