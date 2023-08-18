const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  if (emailPattern.test(email)) {
    emailError.textContent = '';
    emailInput.style.border = '1px solid #ccc';
  } else {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.style.border = '1px solid red';
  }
});