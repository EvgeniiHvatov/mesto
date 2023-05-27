export default class Card {
  constructor({cardData, cardSelector, userId, handleCardClick, handleLikeButton, handleRemoveButton}) {
    this._nameData = cardData.name;
    this._linkData = cardData.link;
    this._likes = cardData.likes;
    this._dataId = cardData._id;
    this._UserId = userId,
    this._isUserCard = userId === cardData.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._handleRemoveButton = handleRemoveButton;
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
    this._cardDeleteButton = this._cardElement.querySelector('.places__delete-card');
    this._likesIndicator = this._cardElement.querySelector('.places__likes-indicator');
    this._likesIndicator.textContent = this._likes.length;

    this._cardElementTitle.textContent = this._nameData;
    this._cardElementImage.src = this._linkData;
    this._cardElementImage.alt = this._nameData;

    this._setEventListeners();
    this._toggleLikesCounter();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElementContainer.addEventListener('click', () => {
      this._handleCardClick(this._nameData, this._linkData);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    if (!this._isUserCard) {
      this._cardDeleteButton.remove();
      this._cardDeleteButton = null;
    } else {
      this._cardElement.querySelector('.places__delete-card').addEventListener('click', (evt) => {
        this._handleRemoveButton(evt);
      });
    }
  }

  _toggleLikesCounter() {
    if (this._checkUserLikes()) {
      this.setLike();
    } else {
      this.unsetLike();
    };
  }

  _checkUserLikes() {
    return this._likes.some(item => item._id === this._UserId);
 }

  setLike() {
    this._likeButton.classList.add('places__like_active');
    this.isLiked = true;
  }

  unsetLike() {
    this._likeButton.classList.remove('places__like_active');
    this.isLiked = false;
  }

  updatelikesCounter(data) {
    this._likesIndicator.textContent = data.length;
  }

  getCardId() {
    return this._dataId;
  }
}
