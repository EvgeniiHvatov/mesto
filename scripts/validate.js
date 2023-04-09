const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach(form => {
    form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    });
    setEventListeners(form, rest)
  })
}

const setEventListeners = (formToValidate, {inputSelector, submitButtonSelector, ...rest}) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  disableButton(formButton, rest)
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest)
      } else {
        enableButton(formButton, rest)
      }
    })
  })
}

const checkInputValidity = (input) => {
  const inputError = document.querySelector(`#${input.id}-error`);
  console.log(inputError)
  if (input.checkValidity()) {
    inputError.textContent = "";

  } else {
    inputError.textContent = input.validationMessage;
  }
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

const enableButton = (button, {inactiveButtonClass}) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled', false)
}


const disableButton = (button, {inactiveButtonClass}) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true)
}

enableValidation(validationConfig)

