export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.places__item')
      .cloneNode(true);
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
      this._handleCardClick();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this._cardElement.querySelector('.places__delete-card').addEventListener('click', () => this._deleteCard());
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('places__like_active');
  }

  _deleteCard () {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
