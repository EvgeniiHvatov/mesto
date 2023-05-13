import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    _elementFullImage= this._popupElement.querySelector('.popup__image');
    _elementFullImageTitle = this._popupElement.querySelector('.popup__heading');

  open(cardData) {
    this._elementFullImageTitle.textContent = cardData.name;
    this._elementFullImage.src = cardData.link;
    this._elementFullImage.alt = cardData.name;

    super.open();
  }
}
