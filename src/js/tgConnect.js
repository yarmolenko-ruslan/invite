// Добавить сообщение
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// Добавить файл
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`;
const success = document.querySelector('.success');

document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();

	let message = `<b>Форма обратной связи</b>\n`;
	message += `\n`;
	message += `<b>Отправитель: </b>${this.name.value}\n`;
	message += `<b>Присутствие: </b>${this.presence.value}\n`;
	message += `\n`;
	message += `<b>Буду пить:</b>\n`;
	message += this.whiteWine.checked ? `Белое вино \n` : ``;
	message += this.redWine.checked ? `Красное вино \n` : '';
	message += this.champagne.checked ? `Шампанское \n` : '';
	message += this.vodka.checked ? `Водку \n` : '';
	message += this.martini.checked ? `Мартини \n` : '';
	message += this.noAlcohol.checked ? `Водичку, сок, газировку \n` : '';
	message += `\n`;
	message += `<b>Буду кушать: </b>\n`;
	message += this.pig.checked ? `Свинина \n` : '';
	message += this.chicken.checked ? `Курица \n` : '';
	message += this.beef.checked ? `Говядина \n` : '';
	message += this.fish.checked ? `Рыба \n` : '';
	message += this.vegan.checked ? `Вегетарианское блюдо \n` : '';
	message += `\n`;
	message += this.other.value
		? `<b>Другая информация: </b> ${this.other.value}`
		: `<b>Другая информация: </b> Я все сказал \n`;

	axios
		.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message,
		})
		.then(res => {
			this.name.value = '';
			this.presence.checked = '';

			this.whiteWine.checked = '';
			this.redWine.checked = '';
			this.champagne.checked = '';
			this.vodka.checked = '';
			this.martini.checked = '';
			this.noAlcohol.checked = '';

			this.pig.checked = '';
			this.chicken.checked = '';
			this.beef.checked = '';
			this.fish.checked = '';
			this.vegan.checked = '';

			this.other.value = '';

			success.style.display = 'block';
		})
		.cath(error => {
			console.warn(error);
		});
});
