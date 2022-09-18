function form() {
	const formContainer = document.querySelector(`.formContainer`);
	const formBtn = document.querySelector(`.formBtn`);

	function showForm() {
		formContainer.classList.add(`displayForm`);
		console.log(`show form`);
	}

	return {
		formContainer,
		formBtn,
		showForm,
	};
}

export { form };
