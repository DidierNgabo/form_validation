const form = document.querySelector('#form');
const username = document.querySelector('#username');
console.log(username);
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the value of the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === '') {
    //show error
    setErrorFor(username, 'Username can not be blank');
    //add error class
  } else {
    //add success class
    setSuccessFor(username);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email can not be blank');
  } else if (!validEmail(emailValue)) {
    setErrorFor(email, 'Please enter a valid email');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password can not be blank');
  } else if (passwordValue < 5 || passwordValue > 10) {
    setErrorFor(password, 'Password can not be less than 5 or greater than 10');
  } else {
    setSuccessFor(password);
  }
  if (confirmPasswordValue === '') {
    setErrorFor(confirmPassword, 'confirm password can not be empty');
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, 'Passwords does not match');
  } else {
    setSuccessFor(confirmPassword);
  }
}

function setErrorFor(input, message) {
  const formControlor = input.parentElement; //.form-control div
  const small = formControlor.querySelector('small');
  //add error message to small tag
  small.innerText = message;
  // add error class
  formControlor.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControlor = input.parentElement;
  formControlor.className = 'form-control success';
}

function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
