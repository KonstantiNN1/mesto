// Editing
const popupButtonEdit = document.querySelector(`.profile__button-edit`);
const editingPopup = document.querySelector(`#popup-edit`);
const closingPopupButtonEdit = document.querySelector(`#popup-close-edit`);

const profileName = document.querySelector(`.profile__name`);
const nameInput = document.querySelector(`#input-name`);

const profileOccupation = document.querySelector(`.profile__occupation`);
const occupationInput = document.querySelector(`#input-occupation`);

const popupFormEdit = document.querySelector(`#popup-form-edit`);


popupButtonEdit.addEventListener(`click`, function() {
    openPopup(editingPopup);
});

closingPopupButtonEdit.addEventListener(`click`, function() {
    closePopup(editingPopup);
});

popupFormEdit.addEventListener(`submit`, function (event) {
    event.preventDefault();

    profileOccupation.textContent = occupationInput.value;
    profileName.textContent = nameInput.value;

    closePopup(editingPopup);
});

function openPopup(popup) {
    popup.classList.add(`popup_opened`);

    nameInput.value = profileName.textContent;
    occupationInput.value = profileOccupation.textContent;
};

function  closePopup(popup) {
    popup.classList.remove(`popup_opened`);
};

// Adding 
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

const popupButtonAdd = document.querySelector(`.profile__button-add`);
const addingPopup = document.querySelector(`#popup-add`);
const closingPopupButtonAdd = document.querySelector(`#popup-close-add`);

const elementsTitle = document.querySelector(`.elements__title`);
const titleInput = document.querySelector(`#input-title`);

const elementsPhoto = document.querySelector(`.elements__photo`);
const photoInput = document.querySelector(`#input-photo`);

const popupFormAdd = document.querySelector(`#popup-form-add`);

popupButtonAdd.addEventListener(`click`, function() {
    openPopup(addingPopup);
});

closingPopupButtonAdd.addEventListener(`click`, function() {
    closePopup(addingPopup);
});


// popupFormAdd.addEventListener(`submit`, function (event) {
//     event.preventDefault();

//     const newCard = {
//         name: titleInput.value,
//         link: photoInput.value
//     };

//     initialCards.unshift(newCard);

//     closePopup(addingPopup);
//     popupFormAdd.reset();
// });



const elementBox = document.querySelector('#elements__box').content;
const Elements = document.querySelector(`.elements`);

initialCards.forEach(function(card) {
    const newElementBox = elementBox.querySelector(`.elements__box`).cloneNode(true);
newElementBox.querySelector(`.elements__photo`).src = card.link;
newElementBox.querySelector(`.elements__title`).textContent = card.name;

Elements.append(newElementBox);
});


// LIKE
const likeActive = document.querySelectorAll(`.elements__like`);
Elements.append(likeActive);

likeActive.forEach((likeActive) => {
    likeActive.addEventListener(`click`, (e) => {
        e.target.classList.toggle(`elements__like_active`);
    });
});

// Elements.forEach((Elements) => {
//     Elements.addEventListener(`click`, (e) => {
//         e.target.classList.toggle(`elements_zoomed`);
//     });
// });



