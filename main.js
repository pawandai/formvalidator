const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
function showError(input, message) {
  const formElement = input.parentElement;
  const small = formElement.querySelector('small');
  formElement.className = 'form-element error';
  small.innerText = message;
}

function showSuccess(input) {
  const formElement = input.parentElement;
  formElement.className = 'form-element success';
}

function validEmail(input) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
  {
    return true;
  } else {
    return false;
  }
}


//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  if(username.value === '') {
    showError(username, 'Username is required');
  } else if(username.value.length < 4) {
    showError(username, 'Username must be atleast four characters');
  } else {
    showSuccess(username);
  }

  if(email.value === '') {
    showError(email, 'Email is required');
  } else if(!validEmail(email)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if(password.value === '') {
    showError(password, 'Password is required');
  } else if(password.value.length < 6) {
    showError(password, 'Password must be atleast six characters');
  } else {
    showSuccess(password);
  }

  if(password2.value === '') {
    showError(password2, 'Password Confirmation is required');
  } else if(password2.value !== password.value) {
    showError(password2, 'Passwords do not match');
  } else {
    showSuccess(password2);
  }
});