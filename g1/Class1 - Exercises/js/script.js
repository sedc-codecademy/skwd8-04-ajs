// ELEMENTS

let selectLoginBtn = document.getElementById('login-checked');
let selectRegisterBtn = document.getElementById('register-checked');

let registerForm = document.getElementById('register-form');
let loginForm = document.getElementById('login-form');
let registerBtn = document.getElementById('register-btn');
let nameInput = document.getElementById('name');
let registerEmailInput = document.getElementById('register-email');
let registerPasswordInput = document.getElementById('register-password');

let loginBtn = document.getElementById('login-btn');
let loginEmailInput = document.getElementById('login-email');
let loginPasswordInput = document.getElementById('login-password');

let alertSuccess = document.getElementById('alert-logged-in');
let alertReject = document.getElementById('alert-rejected');

// Database
let isLoginSelected = true;
let registeredUsers = [];

// Functions

// Changing the view, shows login or register form depending on what is selected on top
function changeForm() {
  if (isLoginSelected) {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  }
}
changeForm();

// Hiding the alerts
function hideAlerts() {
  alertReject.style.display = 'none';
  alertSuccess.style.display = 'none';
}
hideAlerts();

// Constructor function for creating a user object
function AuthData(email, password, name = '') {
  this.email = email;
  this.password = password;
  this.name = name;
}

// Helper function, tellls us if a user is already registered or not
function isRegistered(loggedUser) {
  for (let user of registeredUsers) {
    // compare email and password for new and registered user
    if (user.email === loggedUser.email && user.password === loggedUser.password) {
      return true;
    }
  }
  // return false if no such user is found
  return false;
}

// Events
// changing form events
selectLoginBtn.addEventListener('click', function() {
  isLoginSelected = true;
  changeForm();
});
selectRegisterBtn.addEventListener('click', function() {
  isLoginSelected = false;
  changeForm();
});

// register event
registerBtn.addEventListener('click', function() {
  hideAlerts();
  let name = nameInput.value;
  let email = registerEmailInput.value;
  let password = registerPasswordInput.value;

  let newUser = new AuthData(email, password, name);

// if the user is not registered, add him to the array of registeredUsers and take him to login form
  if (!isRegistered(newUser)) {
    registeredUsers.push(newUser);
    alertSuccess.style.display = 'block';
    alertSuccess.innerText = `Hi ${newUser.name}. You have successfully
    registered!`;
    isLoginSelected = true;
    changeForm();

    // if the user has alredy been registered, show him error
  } else {
    alertReject.style.display = 'block';
    alertReject.innerText = 'Sorry, you are allready registered!';
  }
});

// login event
loginBtn.addEventListener('click', function() {
  hideAlerts();
  let email = loginEmailInput.value;
  let password = loginPasswordInput.value;

  let loggedUser = new AuthData(email, password);

// if the user is registered, he can login, show success message
  if (isRegistered(loggedUser)) {
    alertSuccess.style.display = 'block';
    alertSuccess.innerText = `You have successfully logged in`;

    // if the user is not registered, take him to register form to register
  } else {
    alertReject.style.display = 'block';
    alertReject.innerText = `You have failed to logg in. Please register`;
    isLoginSelected = false;
    changeForm();
  }
});
