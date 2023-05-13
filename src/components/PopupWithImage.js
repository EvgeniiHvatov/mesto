import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    _elementFullImage= this._popupElement.querySelector('.popup__image');
    _elementFullImageTitle = this._popupElement.querySelector('.popup__heading');

  open(item) {
    this._elementFullImageTitle.textContent = item.name;
    this._elementFullImage.src = item.link;
    this._elementFullImage.alt = item.name;

    super.open();
  }
}
