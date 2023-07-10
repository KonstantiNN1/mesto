const openPopupButtonEdit = document.querySelector(`.profile__button-edit`);
const editingPopup = document.querySelector(`.popup`);
const closePopupButton = document.querySelector(`.popup__close`);

const profileName = document.querySelector(`.profile__name`);
const nameInput = document.querySelector(`#input-name`);

const profileOccupation = document.querySelector(`.profile__occupation`);
const occupationInput = document.querySelector(`#input-occupation`);

const popupForm = document.querySelector(`.popup__form`);

const popupButtonAdd = document.querySelector(`.profile__button-add`);
const addingPopup = document.querySelector(`#popup-add`);
const closingPopupButtonAdd = document.querySelector(`#popup-close-add`);

const elements = document.querySelector(`.elements`);

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

openPopupButtonEdit.addEventListener(`click`, function() {
  openPopup(editingPopup);
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
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
};

function closePopup(popup) {
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
    
    formCard.reset();
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
      elements.prepend(addCard(item));
    });  
    
    function addNewCard(e) {
      e.preventDefault();

      newCard = {
        name: cardNameInput.value,
        link: cardLinkInput.value
      }
      elements.prepend(addCard(newCard));
      closePopup(addingPopup);
    }

    formCard.addEventListener(`submit`, addNewCard);

    closingPopupButtonPhoto.addEventListener(`click`, function() {
      closePopup(popupPhoto);
  });