// Reference inputs
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPhone = document.getElementById('inputPhone');

// Reference error spans
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPhone = document.getElementById('errorPhone');

// Reference button
const addAllButton = document.getElementById('addAllButton');

// Reference to the list
const dataList = document.getElementById('dataList');

// Validations
function validateEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validatePhone(phone) {
  const regexPhone = /^[0-9]{10}$/;
  return regexPhone.test(phone);
}

function validateName(name) {
  return name.trim().length >= 10;
}

// Event listeners for real-time validation
inputName.addEventListener('input', () => {
  if (!validateName(inputName.value)) {
    inputName.style.borderColor = 'red';
    errorName.textContent = 'The name must have at least 10 characters.';
  } else {
    inputName.style.borderColor = 'green';
    errorName.textContent = '';
  }
});

inputEmail.addEventListener('input', () => {
  if (!validateEmail(inputEmail.value)) {
    inputEmail.style.borderColor = 'red';
    errorEmail.textContent = 'Please enter a valid email address.';
  } else {
    inputEmail.style.borderColor = 'green';
    errorEmail.textContent = '';
  }
});

inputPhone.addEventListener('input', () => {
  if (!validatePhone(inputPhone.value)) {
    inputPhone.style.borderColor = 'red';
    errorPhone.textContent = 'The phone number must be 10 digits.';
  } else {
    inputPhone.style.borderColor = 'green';
    errorPhone.textContent = '';
  }
});

// Function to add record to the list
function addRecord(name, email, phone) {
  const li = document.createElement('li');
  li.textContent = `Name: ${name} | Email: ${email} | Phone: ${phone}`;
  dataList.appendChild(li);
}

// Button event listener
addAllButton.addEventListener('click', () => {
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const phone = inputPhone.value.trim();

  let valid = true;

  if (!validateName(name)) {
    errorName.textContent = "The name must have at least 10 characters.";
    valid = false;
  }
  if (!validateEmail(email)) {
    errorEmail.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (!validatePhone(phone)) {
    errorPhone.textContent = "The phone number must be 10 digits.";
    valid = false;
  }

  if (valid) {
    addRecord(name, email, phone);

    // clear inputs
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";

    // reset styles
    inputName.style.borderColor = "#ccc";
    inputEmail.style.borderColor = "#ccc";
    inputPhone.style.borderColor = "#ccc";
  }
});
