import './index.css';

import {initialCards} from '../utils/initialCards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileSelector,
  openPopupButton,
  profileTitle,
  profileSubtitle,
  placesList,
  popupFullImage,
  popupProfile,
  popupAddCard,
  cardSelector,
  validationConfig,
  inputText,
  inputAbout,
  openPopupButtonAddCard,
} from '../utils/constants.js';

const popupCardFormElement = document.querySelector(popupAddCard);

const profileElement = document.querySelector(profileSelector);
const profileEditButtonElement = profileElement.querySelector(openPopupButton);

const popupProfileFormElement = document.querySelector(popupProfile);

const popupProfileNameElement = popupProfileFormElement.querySelector(inputText);
const popupProfileAboutElement = popupProfileFormElement.querySelector(inputAbout);

/* отрисовать cards */

const popupWithImage = new PopupWithImage(popupFullImage);
popupWithImage.setEventListeners();

function createCard(data) {
  const newCard = new Card(data, cardSelector, () => {popupWithImage.open(data)});
  return newCard.generateCard();
};

const renderCards = new Section(
  { items: initialCards,
    renderer: (data) => {
      const card = createCard(data);
      renderCards.addItemAppend(card);
    }
  },
  placesList);

renderCards.renderItems();

/** Изменение данных профиля */
const userInfo = new UserInfo({profileTitle, profileSubtitle});

const popupWithProfileForm = new PopupWithForm(popupProfile, (formData) => {
  userInfo.setUserInfo({firstname: formData.firstname, about: formData.about});
  popupWithProfileForm.close();
});

popupWithProfileForm.setEventListeners();

profileEditButtonElement.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  popupProfileNameElement.value = userData.firstname;
  popupProfileAboutElement.value = userData.about;
  popupWithProfileForm.open();
});

/** Создание новой карточки */
const popupWithCardForm = new PopupWithForm(popupAddCard, (formData) => {
  const card = createCard({name: formData.name, link: formData.link});
  renderCards.addItemPrepend(card);
  popupWithCardForm.close();
});

popupWithCardForm.setEventListeners();

document.querySelector(openPopupButtonAddCard).addEventListener('click', () => {
  newCardValidation.disableButton();
  popupWithCardForm.open();
});


const profileValidation = new FormValidator(validationConfig, popupProfileFormElement);
const newCardValidation = new FormValidator(validationConfig, popupCardFormElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();