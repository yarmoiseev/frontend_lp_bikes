
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