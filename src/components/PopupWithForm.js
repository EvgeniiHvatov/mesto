import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      this._popupForm = this._popupElement.querySelector('.popup__input-list');
      this._inputsList = this._popupForm.querySelectorAll('.popup__input');
      this._submitButtonElement = this._popupElement.querySelector('.popup__save-button');
      this._handleFormSubmit = handleFormSubmit;
    }

    /** _getInputValues - приватный метод: собрать данные всех полей формы. */
    _getInputValues() {
      this._formValues = {};
      this._inputsList.forEach(input => {
        this._formValues[input.name] = input.value});
      return this._formValues;
    }

    /** перезаписать родительский метод setEventListeners */
    setEventListeners() {
      super.setEventListeners();
      this._popupElement.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    }

   /** перезаписать родительский метод close */
    close() {
      super.close();
      this._popupForm.reset(); // сбросить значения полей формы.
    }
}
