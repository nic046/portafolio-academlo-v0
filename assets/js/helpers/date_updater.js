function updateDateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.current-year');
	console.log(copyrightElement)
	copyrightElement.textContent = `${currentYear}`;
}

export default updateDateYear;
