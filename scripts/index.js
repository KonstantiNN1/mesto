const openPopupButtonEdit = document.querySelector(`.profile__button-edit`);
const editingPopup = document.querySelector(`.popup`);
const closePopupButton = document.querySelector(`.popup__close`);

const profileName = document.querySelector(".profile__name");
const nameInput = document.querySelector("#input-name");

const profileOccupation = document.querySelector(".profile__occupation");
const occupationInput = document.querySelector("#input-occupation");

const popupForm = document.querySelector(".popup__form");
const likeActive = document.querySelectorAll(".elements__like");

nameInput.value = profileName.textContent;
occupationInput.value = profileOccupation.textContent;

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
};

function  closePopup(popup) {
    popup.classList.remove(`popup_opened`);
};


likeActive.forEach((likeActive) => {
    likeActive.addEventListener(`click`, (e) => {
        e.target.classList.toggle(`elements__like_active`);
    });
});