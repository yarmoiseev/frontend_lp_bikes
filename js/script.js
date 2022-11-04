
/* rbi (Responsive Background Image) function for responsive images grom html source */
function rbi() {
	let rbi = document.querySelectorAll('.rbi');

	for (let i = 0; i < rbi.length; i++) {
		if (rbi[i].querySelector('img')) {
			rbi[i].style.backgroundImage = 'url('+rbi[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
rbi();

/* Hamburger menu */
const menuIcon = document.getElementsByClassName('menu__icon')[0]
const menuBody = document.getElementsByClassName('menu__body')[0]
const menuBar = document.getElementsByClassName('icon-menu__bar')


menuIcon.addEventListener('click', () => {
  menuBody.classList.toggle('active');
	for (let item of menuBar) {
		item.classList.toggle('active');
	}
})