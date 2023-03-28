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

const profile = document.querySelector('.profile');
const openPopupButton = profile.querySelector('.profile__edit-button');

const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');

const cardTemplate = document.querySelector('#card').content;
const placesList = document.querySelector('.places__list');

const popupFullImage = document.querySelector('.popup_full-image');
const elementFullImage = popupFullImage.querySelector('.popup__image');
const elementFullImageTitle = popupFullImage.querySelector('.popup__heading');

initialCards.forEach(function (element) {
  createCard(element);
});

initProfilePopup();
initAddCard();

function initProfilePopup() {
  const popupProfile = document.querySelector('.popup_edit-profile');
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function initAddCard() {
  const popupAddCard = document.querySelector('.popup_add-card');
  const openPopupButtonAddCard = profile.querySelector('.profile__add-button');

  const popupFormAddCard = popupAddCard.querySelector('.popup__form');
  const inputNameAddCard = popupAddCard.querySelector('.popup__input_text_name-place');
  const inputLinkAddCard = popupAddCard.querySelector('.popup__input_text_image-link');

  openPopupButtonAddCard.addEventListener('click', function() {
    openPopup(popupAddCard);
  });

  const popupList = document.querySelectorAll('.popup');

  popupList.forEach(function(popup) {
    const btn = popup.querySelector('.popup__close');

    btn.addEventListener('click', function() {
      closePopup(popup);
    });
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

function renderCard(element) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  const deleteButton = cardElement.querySelector('.places__delete-card');
  const likeButton = cardElement.querySelector('.places__like');
  const imageCard = cardElement.querySelector('.places__image-container');

  cardElement.querySelector('.places__image').src = element.link;
  cardElement.querySelector('.places__image').alt = element.name;
  cardElement.querySelector('.places__text').textContent = element.name;

  deleteButton.addEventListener('click', function () {
    deleteCard(cardElement);
  });

  likeButton.addEventListener('click', function () {
    toggleLike(likeButton);
  });

  imageCard.addEventListener('click', function() {
    elementFullImage.src = element.link;
    elementFullImage.alt = element.name;
    elementFullImageTitle.textContent = element.name;

    openPopup(popupFullImage);
  });

  return cardElement;
}

function createCard(element) {
  placesList.prepend(renderCard(element));
}

function deleteCard(elem) {
  elem.remove();
}

function toggleLike(elem) {
  elem.classList.toggle('places__like_active');
}

