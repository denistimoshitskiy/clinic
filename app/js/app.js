document.addEventListener('DOMContentLoaded', () => {

	// Открытие окна поиска пациента

	const formSearch = document.querySelector('.form-search');
	const inputSearch = document.querySelector('.form-search__input');

	formSearch.addEventListener('mouseenter', () => {
		inputSearch.classList.add('form-search__input--visually');
	});
	formSearch.addEventListener('mouseleave', () => {
		inputSearch.classList.remove('form-search__input--visually');
	});

})
