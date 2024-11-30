export function removeError(input, parent) {
	if (input.classList.contains('error')) {
		parent.querySelector('.form__error-label').remove();
	}
	input.classList.remove('error');
}

// export function removeError(input, parent) {
// 	const errorLabel = parent.querySelector('.form__error-label');
// 	if (errorLabel) {
// 		errorLabel.remove();
// 	}
// 	input.classList.remove('error');
// }

export const createError = (element, text) => {
	const errorLabel = document.createElement('label');
	errorLabel.classList.add('form__error-label');
	errorLabel.textContent = text;

	element.append(errorLabel);
};

export const validationTextInput = form => {
	let result = true;
	const userName = form.querySelector('.form-input');
	const parentError = form.querySelector('.form__box');

	removeError(userName, parentError);

	if (!userName.value.trim()) {
		createError(parentError, 'Поле не заполнено!');
		result = false;
	} else if (userName.value.length < 5) {
		createError(parentError, 'Минимальное кол-во символов 5');
		result = false;
	}

	if (!result) {
		userName.classList.add('error');
	}

	return result;
};

// export const validationRadioInput = () => {
// 	const checkRadio = form.querySelector('.form-checkbox');
// 	const checkBox = form.querySelectorAll('.form-radio__rel');
// 	input.classList.add('error');

// 	checkBox.forEach(el => {
// 		if (el.hasAttribute('checked')) {
// 			result = true;
// 		}

// 		createError(el, 'Подтвердите свое присутствие!');

// 		result = false;
// 	});
// };

export function validation(form) {
	let result = true;
	if (validationTextInput(form)) {
		return (result = true);
	} else {
		return (result = false);
	}
}
