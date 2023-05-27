import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      this._popupForm = this._popupElement.querySelector('.popup__form');
      this._inputsList = this._popupForm.querySelectorAll('.popup__input');
      this._submitButtonElement = this._popupElement.querySelector('.popup__submit');
      this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
      this._formValues = {};
      this._inputsList.forEach(input => {
        this._formValues[input.name] = input.value});
      return this._formValues;
    }

    setEventListeners() {
      super.setEventListeners();
      this._popupElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    }

    close() {
      super.close();
      this._popupForm.reset();
    }

    renderLoading(isLoading) {
      if (isLoading === true) {
        this._submitButtonElement.textContent = 'Сохранение...';
      } else {
        this._submitButtonElement.textContent = 'Сохранить';
      }
    }
}
