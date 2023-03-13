let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');

let openPopupButton = profile.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close');

let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

let inputText = popup.querySelector('.popup__input_text_name');
let inputAbout = popup.querySelector('.popup__input_text_about');

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card').content;
const placesList = document.querySelector('.places__list');


initialCards.forEach((function cCard(element) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.places__image').src = element.link;
  cardElement.querySelector('.places__image').alt = 'Старинное здание в горах';
  cardElement.querySelector('.places__text').textContent = element.name;

  placesList.append(cardElement);

}));


/*
const cardTemplate = document.querySelector('#card').content;
const placesList = document.querySelector('.places__list');
const cardElement1 = cardTemplate.querySelector('.places__item').cloneNode(true);
const cardElement2 = cardTemplate.querySelector('.places__item').cloneNode(true);
const cardElement3 = cardTemplate.querySelector('.places__item').cloneNode(true);
const cardElement4 = cardTemplate.querySelector('.places__item').cloneNode(true);
const cardElement5 = cardTemplate.querySelector('.places__item').cloneNode(true);
const cardElement6 = cardTemplate.querySelector('.places__item').cloneNode(true);
//контент 1 карточки

cardElement1.querySelector('.places__image').src = './images/karachaevsk.jpg';
cardElement1.querySelector('.places__image').alt = 'Старинное здание в горах';
cardElement1.querySelector('.places__text').textContent = 'Карачаевск';
cardElement1.querySelector('.places__like').type = 'button';

//контент 2 карточки

cardElement2.querySelector('.places__image').src = './images/mount_elbrus.jpg';
cardElement2.querySelector('.places__image').alt = 'Вид на гору из далека';
cardElement2.querySelector('.places__text').textContent = 'Гора Эльбрус';
cardElement2.querySelector('.places__like').type = 'button';

//контент 3 карточки

cardElement3.querySelector('.places__image').src = './images/dombai.jpg';
cardElement3.querySelector('.places__image').alt = 'Вид на гору за холмом';
cardElement3.querySelector('.places__text').textContent = 'Домбай';
cardElement3.querySelector('.places__like').type = 'button';

//контент 4 карточки

cardElement4.querySelector('.places__image').src = './images/mount_elbrus.jpg';
cardElement4.querySelector('.places__image').alt = 'Вид на гору из далека';
cardElement4.querySelector('.places__text').textContent = 'Гора Эльбрус';
cardElement4.querySelector('.places__like').type = 'button';

//контент 5 карточки

cardElement5.querySelector('.places__image').src = './images/dombai.jpg';
cardElement5.querySelector('.places__image').alt = 'Вид на гору за холмом';
cardElement5.querySelector('.places__text').textContent = 'Домбай';
cardElement5.querySelector('.places__like').type = 'button';

//контент 6 карточки

cardElement6.querySelector('.places__image').src = './images/karachaevsk.jpg';
cardElement6.querySelector('.places__image').alt = 'Старинное здание в горах';
cardElement6.querySelector('.places__text').textContent = 'Карачаево-Черкесия';
cardElement6.querySelector('.places__like').type = 'button';

// отображаем на странице
placesList.append(cardElement1, cardElement2, cardElement3, cardElement4, cardElement5, cardElement6,);//
*/

