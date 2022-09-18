const form = document.querySelector(`.form`);
const inputControl = document.querySelector(`input-control`);
const fName = document.querySelector(`.firstName`);
const lName = document.querySelector(`.lastName`);
const pNumber = document.querySelector(`.phoneNumber`);
const email = document.querySelector(`.eMail`);

// validate the form

const validateInputs = () => {
	const fnameValue = fName.value.trim();
	const lNameValue = lName.value.trim();
	const pNumberValue = pNumber.value.trim();
	const emailValue = email.value.trim();
};

// submit the form

form.addEventListener(`submit`, e => {
	e.preventDefault();

	validateInputs();
});
