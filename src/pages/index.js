import './index.css';

import Api from '../components/Api.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {
  profileSelector,
  openPopupButton,
  profileTitle,
  profileSubtitle,
  placesList,
  popupFullImage,
  popupProfile,
  popupAddCard,
  popupAvatar,
  cardSelector,
  validationConfig,
  openPopupButtonAddCard,
  popupConfirmationSelector,
  avatarEditButton,
  profileAvatar
} from '../utils/constants.js';


const popupCardFormElement = document.querySelector(popupAddCard);

const profileElement = document.querySelector(profileSelector);
const profileEditButtonElement = profileElement.querySelector(openPopupButton);
const avatarEditButtonElement = document.querySelector(avatarEditButton);

const popupProfileFormElement = document.querySelector(popupProfile);
const popupAvatarFormElement = document.querySelector(popupAvatar);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'd7dcd0f2-c4b8-4c41-b858-1f8610d52fd1',
    'Content-Type': 'application/json'
  }
});


api.getDataFromServer().then((responses) => {
  const [initialCards, userData] = responses;
  userInfo.setUserInfo({userName: userData.name, userAbout: userData.about, userAvatar: userData.avatar, userId: userData._id});
  renderCards.renderItems(initialCards);
})
.catch((err) => {
  console.error(err);
});

const renderCards = new Section(
  placesList,
  {
    renderer: (cardData) => {
    const newCard = new Card({
      cardData: cardData,
      cardSelector: cardSelector,
      userId: userInfo.getUserId(),
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      handleLikeButton: () => {
        if (newCard.isLiked) {
          api.deleteCardLike(newCard.getCardId())
          .then((cardData) => {
            newCard.unsetLike();
            newCard.updatelikesCounter(cardData.likes);
          })
          .catch((err) => {
            console.error(err);
          });
        } else {
          api.addCardLike(newCard.getCardId())
          .then((cardData) => {
            newCard.setLike();
            newCard.updatelikesCounter(cardData.likes);
          })
          .catch((err) => {
            console.error(err);
          });
        }
      },
      handleRemoveButton: (event) => {
        const cardElement = event.target.closest('.places__item');
        const cardId = newCard.getCardId();
        popupWithConfirmation.open();
        popupWithConfirmation.updateSubmitHandler(() => {
          api.removeCard(cardId)
          .then(() => {
            cardElement.remove();
            popupWithConfirmation.close();
          })
          .catch((err) => {
            console.error(err);
          });
        });
      }
    });
    return newCard.generateCard();
  }
});

const popupWithConfirmation = new PopupWithConfirmation(popupConfirmationSelector);
popupWithConfirmation.setEventListeners();

const popupWithImage = new PopupWithImage(popupFullImage);
popupWithImage.setEventListeners();

const userInfo = new UserInfo({profileTitle, profileSubtitle, profileAvatar});

const popupWithProfileForm = new PopupWithForm(popupProfile, (formData) => {
  popupWithProfileForm.renderLoading(true);
  api.updateUserInfo({name: formData.firstname, about: formData.about}).then((data) => {
    userInfo.changeUserInfo({firstname: data.name, about: data.about});
    popupWithProfileForm.close();
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    popupWithProfileForm.renderLoading(false);
  });
});

popupWithProfileForm.setEventListeners();

const profileValidation = new FormValidator(validationConfig, popupProfileFormElement);
profileValidation.enableValidation();


profileEditButtonElement.addEventListener('click', () => {
  userInfo.getUserInfo();
  profileValidation.disableButton();
  popupWithProfileForm.open();
});

const popupUpdateAvatar = new PopupWithForm(popupAvatar, (formData) => {
  popupUpdateAvatar.renderLoading(true);
  api.updateProfileAvatar({avatar: formData.url})
  .then((data) => {
    userInfo.setUserAvatar({newAvatar: data.avatar});
    popupUpdateAvatar.close();
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    popupUpdateAvatar.renderLoading(false);
  });
});

popupUpdateAvatar.setEventListeners();

const avatarValidation = new FormValidator(validationConfig, popupAvatarFormElement);
avatarValidation.enableValidation();

avatarEditButtonElement.addEventListener('click', () => {
  avatarValidation.disableButton();
  popupUpdateAvatar.open();
});


const popupWithCardForm = new PopupWithForm(popupAddCard, (formData) => {
  popupWithCardForm.renderLoading(true);
  api.addNewCard(formData).then((formData) => {
    renderCards.addItem(formData);
    popupWithCardForm.close();
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    popupWithCardForm.renderLoading(false);
  });
});

popupWithCardForm.setEventListeners();

const newCardValidation = new FormValidator(validationConfig, popupCardFormElement);
newCardValidation.enableValidation();

document.querySelector(openPopupButtonAddCard).addEventListener('click', () => {
  newCardValidation.disableButton();
  popupWithCardForm.open();
});
