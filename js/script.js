
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
	menuIcon.classList.toggle('active');
})

/* swiper.js */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	autoHeight: true, 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	slideToClickedSlide: true,
	grabCursor: true,
	spaceBetween: 50,
});

/* e-mail validation */
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelectorAll('input[type=email]');
const inputparent = document.querySelector('.newsletter');

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onFocusOut() {
	for (const el of input) {
		if (isEmailValid(el.value)) {
			el.style.borderColor = '#32a852';
		} else {
			el.style.borderColor = '#a83232';
		}
	}
}

function onClick() {
	for (const el of input) {
		el.style.borderColor = '#d3d7d9';
		el.placeholder = '';
	}
}

function onFocus() {
	for (const el of input) {
		el.classList.add("focus");
	}
}

inputparent.addEventListener('focusout', function(event) {
	if (event.target.closest('input')) {
		onFocusOut();
	}
});

inputparent.addEventListener('click', function(event) {
	if (event.target.closest('input')) {
		onClick();
	}
});

inputparent.addEventListener('focus', function(event) {
	if (event.target.closest('input')) {
		onFocus();
	}
}, true);