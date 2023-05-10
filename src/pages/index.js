import {initialCards} from '../utils/initialCards.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  profile,
  openPopupButton,
  profileTitle,
  profileSubtitle,
  placesList,
  validationConfig
} from '../utils/constants.js';

//const profile = document.querySelector('.profile');
//const openPopupButton = profile.querySelector('.profile__edit-button');

//const profileTitle = profile.querySelector('.profile__title');
//const profileSubtitle = profile.querySelector('.profile__subtitle');
//const placesList = document.querySelector('.places__list');

const popupFullImage = document.querySelector('.popup_full-image');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');

const closeImage = popupFullImage.querySelector('.popup__close');
const closePopupProfile = popupProfile.querySelector('.popup__close');
const closePopupButtonAddCard = popupAddCard.querySelector('.popup__close');

// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_active'
// };

function initProfilePopup() {

  const inputText = popupProfile.querySelector('.popup__input_text_name');
  const inputAbout = popupProfile.querySelector('.popup__input_text_about');
  const popupForm = popupProfile.querySelector('.popup__form');


  openPopupButton.addEventListener('click', function() {
    inputText.value = profileTitle.textContent;
    inputAbout.value = profileSubtitle.textContent;
    openPopup(popupProfile);
  });

  popupForm.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputText.value;
    profileSubtitle.textContent = inputAbout.value;
    closePopup(popupProfile);
  }
}

initProfilePopup();

closePopupProfile.addEventListener('click', function() {
  closePopup(popupProfile);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupPressEsc);
}

export {openPopup}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupPressEsc);
}

function closePopupPressEsc(evt) {
  if(evt.key ==='Escape'){
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
}

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupProfile);
    closePopup(popupAddCard);
    closePopup(popupFullImage);
  }
});

function initAddCard() {
  const openPopupButtonAddCard = profile.querySelector('.profile__add-button');

  const popupFormAddCard = popupAddCard.querySelector('.popup__form');
  const inputNameAddCard = popupAddCard.querySelector('.popup__input_text_name-place');
  const inputLinkAddCard = popupAddCard.querySelector('.popup__input_text_image-link');

  openPopupButtonAddCard.addEventListener('click', function() {
    newCardValidation.disableButton();
    openPopup(popupAddCard);
  });

  function handleFormSubmitAddCard(evt) {
    evt.preventDefault();

    const initialAddCard = {
      name: inputNameAddCard.value,
      link: inputLinkAddCard.value
    };

    createCard(initialAddCard);
    closePopup(popupAddCard);

    inputNameAddCard.value = "";
    inputLinkAddCard.value = "";
  }
  popupFormAddCard.addEventListener('submit', handleFormSubmitAddCard);
}

initAddCard();

closePopupButtonAddCard.addEventListener('click', function() {
  closePopup(popupAddCard);
});

closeImage.addEventListener('click', function() {
  closePopup(popupFullImage);
});

const renderCard = (initialCards) => {
  const card = new Card(initialCards, '#card');
  const generatedCard = card.generateCard();
  return generatedCard;
};

initialCards.forEach(element => createCard(element));

function createCard(element) {
  placesList.prepend(renderCard(element));
}

const profileValidation = new FormValidator(validationConfig, popupProfile);
const newCardValidation = new FormValidator(validationConfig, popupAddCard);
profileValidation.enableValidation();
newCardValidation.enableValidation();
