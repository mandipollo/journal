function toggleLogic() {
	const hamburger = document.querySelector(`.hamburgerBtn`);
	const menuBtn = document.querySelector(`.menu-icon`);
	const closeBtn = document.querySelector(`.close-icon`);
	const menu = document.querySelector(`.ulNav`);
	const menuItems = document.querySelectorAll(`.menuItem`);

	function toggleMenu() {
		if (menu.classList.contains(`showMenu`)) {
			menu.classList.remove(`showMenu`);
			closeBtn.style.display = `none`;
			menuBtn.style.display = `block`;
		} else {
			menu.classList.add(`showMenu`);
			closeBtn.style.display = `block`;
			menuBtn.style.display = `none`;
		}
	}

	return {
		toggleMenu,
		hamburger,
		menuItems,
	};
}

export { toggleLogic };
