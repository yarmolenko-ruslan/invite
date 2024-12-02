import { validateForm } from './formValidation';

// Добавить ваш токен и чат id
const TOKEN = '7286858908:AAGI1OP-TQAMNoQFKc9lhTDG8zxPhuvApcY';
const CHAT_ID = '-1002222307282';

const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.querySelector('.success');

document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();

	if (validateForm(this)) {
		let message = `<b>Форма обратной связи</b>\n`;
		message += `\n`;
		message += `<b>Отправитель: </b>${this.name.value}\n`;
		message += `<b>Присутствие: </b>${this.presence.value}\n`;
		message += `\n`;
		message += `<b>Предпочтения по напиткам:</b>\n`;

		if (
			!this.noAlcohol.checked &&
			!this.champagne.checked &&
			!this.whiteWine.checked &&
			!this.redWine.checked &&
			!this.konyak.checked &&
			!this.vodka.checked
		) {
			message += 'Безалкогольные напитки';
		}

		message += this.noAlcohol.checked ? `${this.noAlcohol.value} \n` : '';
		message += this.champagne.checked ? `${this.champagne.value}\n` : '';
		message += this.whiteWine.checked ? `${this.whiteWine.value} \n` : '';
		message += this.redWine.checked ? `${this.redWine.value} \n` : '';
		message += this.konyak.checked ? `${this.konyak.value} \n` : '';
		message += this.vodka.checked ? `${this.vodka.value} \n` : '';

		axios
			.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message,
			})
			.then(() => {
				this.name.value = '';
				this.presence.checked = '';
				this.whiteWine.checked = '';
				this.redWine.checked = '';
				this.champagne.checked = '';
				this.vodka.checked = '';
				this.konyak.checked = '';
				this.noAlcohol.checked = '';

				success.style.opacity = '1';
			})
			.catch(error => {
				console.warn(error);
			});
	}
});
