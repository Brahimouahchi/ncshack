const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message'); // Assuming you have an error message element
const signupForm = document.getElementById('signup-form');
const passwordStrength = document.querySelector('.password-strength'); // Select the password strength indicator

// Password strength function (example, replace with your preferred logic)
function getPasswordStrength(password) {
  const length = password.length;
  let strength = 0;
  if (length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;

  switch (strength) {
    case 1:
      return 'Weak';
    case 2:
      return 'Medium';
    case 3:
      return 'Strong';
    case 4:
      return 'Very Strong';
    default:
      return 'None';
  }
}

// Event listener for password input
passwordInput.addEventListener('keyup', (event) => {
  const password = event.target.value;
  const strengthText = getPasswordStrength(password);
  passwordStrength.textContent = strengthText;

  // Adjust password strength indicator color based on strength
  switch (strengthText) {
    case 'Weak':
      passwordStrength.style.color = 'red';
      break;
    case 'Medium':
      passwordStrength.style.color = 'orange';
      break;
    case 'Strong':
      passwordStrength.style.color = 'yellowgreen';
      break;
    case 'Very Strong':
      passwordStrength.style.color = 'green';
      break;
    default:
      passwordStrength.style.color = '#ccc'; // Reset to default color
  }

  // Show/hide password strength indicator based on password length
  if (password.length > 0) {
    passwordStrength.style.display = 'block';
  } else {
    passwordStrength.style.display = 'none';
  }
});

signupForm.addEventListener('submit', (event) => {
  // Simple validation (replace with your server-side validation)
  if (usernameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
    errorMessage.textContent = 'Please fill in all required fields.';
    errorMessage.style.display = 'block';
    event.preventDefault(); // Prevent form submission if validation fails
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage.textContent = 'Passwords do not match.';
    errorMessage.style.display = 'block';
    event.preventDefault(); // Prevent form submission if passwords don't match
  } else {
    // Assuming form submission is valid, remove any error message
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  }
});
