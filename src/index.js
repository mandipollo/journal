//import modules

import "/src/style.css";
import { toggleLogic } from "./hamburgerLogic";
import { form } from "./formLayout";

// destructure

const { toggleMenu, hamburger, menuItems } = toggleLogic();
const { formContainer, formBtn, showForm } = form();

// load page
function loadPage() {
	// addeventlistener for menu
	hamburger.addEventListener(`click`, toggleMenu);

	// iterate through the dom node list and add listener to each nodes
	menuItems.forEach(menuitem => {
		menuitem.addEventListener(`click`, toggleMenu);
	});

	formBtn.addEventListener(`click`, showForm);
}

loadPage();

// form dom

const formControl = document.querySelector(`.form`);
const fName = document.querySelector(`.firstName`);
const lName = document.querySelector(`.lastName`);
const email = document.querySelector(`.eMail`);
const pNumber = document.querySelector(`.phoneNumber`);

// form inputs validation

// error

const setError = (el, message) => {
	const inputControl = el.parentElement;

	const er = inputControl.querySelector(`input`);
	console.log(er);

	er.value = message;
	er.classList.remove(`success`);
	er.classList.add(`error`);
	console.log(er);
};

// success

const setSuccess = el => {
	const inputControl = el.parentElement;
	const er = inputControl.querySelector(`input`);
	er.classList.remove(`error`);
	er.classList.add(`success`);
};

// email confirmation
const isValidEmail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	return re.test(String(email).toLowerCase());
};
// phone number validation

const validateInputs = () => {
	const fNameValue = fName.value.trim();
	const lastNameValue = lName.value.trim();
	const emailValue = email.value.trim();
	const pNumberValue = pNumber.value.trim();

	if (fNameValue === ``) {
		setError(fName, `First name is required!`);
	} else {
		setSuccess(fName);
	}

	if (lastNameValue === ``) {
		setError(lName, `Last name is required!`);
	} else {
		setSuccess(lName);
	}

	if (emailValue === ``) {
		setError(email, `Email address required!`);
	} else if (!isValidEmail(emailValue)) {
		setError(email, `The email address is incorrect!`);
	} else {
		setSuccess(email);
	}
	if (pNumberValue != ``) {
		setSuccess(pNumber);
	}
};

// form validation

formControl.addEventListener(`submit`, e => {
	e.preventDefault();

	// call validate
	validateInputs();
});
