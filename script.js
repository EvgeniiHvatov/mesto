let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let popupContainer = document.querySelector('.popup__container');

let openPopupButton = profile.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close');

let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

let inputText = popup.querySelector('.popup__text');
let inputAbout = popup.querySelector('.popup__about');

let popupForm = popup.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
  inputText.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputText.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit);
