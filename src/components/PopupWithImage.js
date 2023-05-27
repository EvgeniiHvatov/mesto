import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._elementFullImage= this._popupElement.querySelector('.popup__image');
    this._elementFullImageTitle = this._popupElement.querySelector('.popup__heading');
  }

  open(name, link) {
    this._elementFullImageTitle.textContent = name;
    this._elementFullImage.src = link;
    this._elementFullImage.alt = name;

    super.open();
  }
}
