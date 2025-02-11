import BookManager from "./bookManager.js";
import Ui from "./ui.js";

// Select dom elements
const openAddModalButton = document.querySelector(".add-books__button");
const closeAddModalButton = document.querySelector(".form__close-button");
const formModal = document.querySelector(".form-modal");
const printedBookContainer = document.querySelector(".form__printed-book");
const audioBookContainer = document.querySelector(".form__audio-book");

// Selecting for inputs
const form = document.querySelector(".form");
const title = document.querySelector(".form__title-input");
const author = document.querySelector(".form__author-input");
const publisher = document.querySelector(".form__publisher-input");
const date = document.querySelector(".form__publication-input");
const bookTypeDropdown = document.querySelector(".form__book-type");

const filterContainer = document.querySelector(".filter-books");
const formSubmitButton = document.querySelector(".form__add-button");

// Selecting elements for specific printed books
const pages = document.querySelector(".form__pages-input");
const printType = document.querySelector(".form__print-type");

// Selecting elements for specific audio books
const narrator = document.querySelector(".form__narrator-input");
const duration = document.querySelector(".form__duration-input");

// All elements in printed and audio category
const printedFields = [
  document.querySelector(".form__pages-input"),
  document.querySelector(".form__print-type"),
];
const audioFields = [
  document.querySelector(".form__narrator-input"),
  document.querySelector(".form__duration-input"),
];

// Adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddModal(
    openAddModalButton,
    formModal,
    printedBookContainer,
    audioBookContainer
  );
  Ui.closeAddModal(closeAddModalButton, formModal);

  Ui.renderBooks();
});

bookTypeDropdown.addEventListener("change", () => {
  Ui.toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    audioFields,
    printedFields,
    bookTypeDropdown.value
  );
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  BookManager.addBook(
    title.value.trim(),
    author.value.trim(),
    publisher.value.trim(),
    date.value,
    bookTypeDropdown.value,
    pages.value.trim(),
    printType.value,
    narrator.value.trim(),
    duration.value
  );
  Ui.renderBooks();
});
