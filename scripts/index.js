const openPopupButtonEdit = document.querySelector(`.profile__button-edit`);
const editingPopup = document.querySelector(`.popup`);
const closePopupButton = document.querySelector(`.popup__close`);

const profileName = document.querySelector(`.profile__name`);
const nameInput = document.querySelector(`#input-name`);

const profileOccupation = document.querySelector(`.profile__occupation`);
const occupationInput = document.querySelector(`#input-occupation`);

const popupForm = document.querySelector(`.popup__form`);
const likeActive = document.querySelectorAll(`.elements__like`);

const popupButtonAdd = document.querySelector(`.profile__button-add`);
const addingPopup = document.querySelector(`#popup-add`);
const closingPopupButtonAdd = document.querySelector(`#popup-close-add`);

const elementsTitle = document.querySelector(`.elements__title`);
const titleInput = document.querySelector(`#input-title`);

const elementsPhoto = document.querySelector(`.elements__photo`);
const photoInput = document.querySelector(`#input-photo`);

const popupFormAdd = document.querySelector(`#popup-form-add`);
const elementBox = document.querySelector(`#elements__box`).content;
const Elements = document.querySelector(`.elements`);


const newCardButton = document.querySelector(`.profile__button-add`);
const cardCloseButton = document.querySelector(`#popup-close-add`);
const cardNameInput = document.querySelector(`#input-title`);
const cardLinkInput = document.querySelector(`#input-photo`);
const cardTemplate = document.querySelector(`#elements__box`).content;
const cardsContainer = document.querySelector(`.elements`);
const formCard = document.querySelector(`#popup-form-add`);


const popupPhoto = document.querySelector(`#popup-photo`);
const popupPhotoPhoto = document.querySelector(`.popup-photo__photo`);
const popupPhotoDiscription = document.querySelector(`.popup-photo__discription`);

const closingPopupButtonPhoto = document.querySelector(`#popup-close-photo`);

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

openPopupButtonEdit.addEventListener(`click`, function() {
    openPopup(editingPopup);
});

closePopupButton.addEventListener(`click`, function() {
    closePopup(editingPopup);
});

popupForm.addEventListener(`submit`, function (event) {
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

popupButtonAdd.addEventListener(`click`, function() {
    openPopup(addingPopup);
});

closingPopupButtonAdd.addEventListener(`click`, function() {
    closePopup(addingPopup);
});

function addCard(item) {
    const card = cardTemplate.querySelector(`.elements__box`).cloneNode(true);
    const cardPhoto = card.querySelector(`.elements__photo`);
    const cardName = card.querySelector(`.elements__title`);
    const buttonLike = card.querySelector(`.elements__like`);
    const buttonDelete = card.querySelector(`.elements__delete-button`);

    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;
    cardName.textContent = item.name;
    

    buttonLike.addEventListener(`click`, (e) => {
        e.target.classList.toggle(`elements__like_active`);
    })

    buttonDelete.addEventListener(`click`, (e) =>{
        e.target.closest(`.elements__box`).remove();
    })

    cardPhoto.addEventListener(`click`, function(){

        openPopup(popupPhoto);
        
        popupPhotoPhoto.src = item.link;
        popupPhotoPhoto.alt = item.name;
        popupPhotoDiscription.textContent = item.name;
    })
    
    return card;
    };

    initialCards.forEach((item) => {
      Elements.prepend(addCard(item));
    });  
    
    function addNewCard(e) {
      e.preventDefault();

      newCard = {
        name: cardNameInput.value,
        link: cardLinkInput.value
      }
      Elements.prepend(addCard(newCard));
      closePopup(addingPopup);
    }

    formCard.addEventListener(`submit`, addNewCard);

    closingPopupButtonPhoto.addEventListener(`click`, function() {
      closePopup(popupPhoto);
  });