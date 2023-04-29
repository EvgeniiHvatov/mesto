import {openPopup} from './index.js';

const popupFullImage = document.querySelector('.popup_full-image');
const elementFullImage = popupFullImage.querySelector('.popup__image');
const elementFullImageTitle = popupFullImage.querySelector('.popup__heading');

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.places__item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElementTitle = this._cardElement.querySelector('.places__text');
    this._cardElementImage = this._cardElement.querySelector('.places__image');
    this._cardElementContainer = this._cardElement.querySelector('.places__image-container');
    this._likeButton = this._cardElement.querySelector('.places__like');

    this._cardElementTitle.textContent = this._name;
    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElementContainer.addEventListener('click', () => {
      this._addDataPopupFullImg(this._name, this._link);
      openPopup(popupFullImage);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this._cardElement.querySelector('.places__delete-card').addEventListener('click', evt => {
      this._cardElement.remove();
    });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('places__like_active');
  }

  _addDataPopupFullImg = (name, link) => {
    elementFullImageTitle.textContent = name;
    elementFullImage.src = link;
    elementFullImage.alt = name;
  }
}
