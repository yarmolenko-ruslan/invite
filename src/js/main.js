import '../scss/style.scss';
import '../js/countDown.js';
import '../js/tgConnect.js';

const wrapperMap = document.querySelector('.location__map');

wrapperMap.addEventListener('click', () => {
	wrapperMap.classList.remove('location__map_active');
});
