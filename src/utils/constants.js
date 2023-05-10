export const profile = document.querySelector('.profile');
export const openPopupButton = profile.querySelector('.profile__edit-button');

export const profileTitle = profile.querySelector('.profile__title');
export const profileSubtitle = profile.querySelector('.profile__subtitle');
export const placesList = document.querySelector('.places__list');



export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};
