const setError = (element, text) => {
	removeError(element);

	const errorLabel = document.createElement('label');
	errorLabel.classList.add('form__error-label');
	errorLabel.textContent = text;
	element.append(errorLabel);
	element.classList.add('error');
};

const removeError = element => {
	const errorLabel = element.querySelector('.form__error-label');
	if (errorLabel) {
		errorLabel.remove();
	}
	element.classList.remove('error');
};

const validateTextInput = input => {
	const parent = input.closest('.form__box');
	removeError(parent);

	const value = input.value.trim();
	if (!value) {
		setError(parent, 'Поле не заполнено!');
		return false;
	}

	if (value.length < 3) {
		setError(parent, 'Минимальное кол-во символов 3');
		return false;
	}

	return true;
};

const validateRadioInput = form => {
	const parent = form.querySelector('.form-radio');
	const radios = form.querySelectorAll('.form-radio__rel');

	removeError(parent);

	const isChecked = Array.from(radios).some(radio => radio.checked);
	if (!isChecked) {
		setError(parent, 'Подтвердите свое присутствие!');
		return false;
	}

	return true;
};

export const validateForm = form => {
	const textInput = form.querySelector('.form-input');
	const isTextInputValid = validateTextInput(textInput);

	const isRadioInputValid = validateRadioInput(form);

	return isTextInputValid && isRadioInputValid;
};
