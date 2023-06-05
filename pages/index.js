const openPopupButton = document.querySelector('.profile__button-edit');
const editPopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

const ptofileName = document.querySelector(".profile__name");
const nameInput = document.querySelector("#input-name");

const ptofileOccupation = document.querySelector(".profile__occupation");
const occupationInput = document.querySelector("#input-occupation");

const popupForm = document.querySelector(".popup__form");

nameInput.value = ptofileName.textContent;
occupationInput.value = ptofileOccupation.textContent;

openPopupButton.addEventListener('click', function() {
    openPopup(editPopup);
});

closePopupButton.addEventListener('click', function() {
    closePopup(editPopup);
});

popupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    ptofileOccupation.textContent = occupationInput.value;
    ptofileName.textContent = nameInput.value;

    closePopup(editPopup);
});

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function  closePopup(popup) {
    popup.classList.remove('popup_opened');
};


// const blackHeart = document.querySelector('.elements__like');
// blackHeart.addEventListener('click', function() {
//     blackHeart.add('elements__like_active')
// })

// function ChangeColor() {
//     like = document.querySelector('.elememts__like');
//     like.classList.add('liked');
// }