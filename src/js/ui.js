class Ui {
  static toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    audioFields,
    printedFields,
    bookType
  ) {
    // Hide both containers
    printedBookContainer.style.display = "none";
    audioBookContainer.style.display = "none";

    // Reset the values of both categories
    printedFields.forEach((field) => (field.value = ""));
    audioFields.forEach((field) => (field.value = ""));
    // Display the relevant container based on user selection
    if (bookType === "printed-book") {
      printedBookContainer.style.display = "block";
    } else {
      audioBookContainer.style.display = "block";
    }
  }
  static displayAddModal(
    openAddModalButton,
    formModal,
    printedBookContainer,
    audioBookContainer
  ) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form");
      // Hide both containers
      printedBookContainer.style.display = "none";
      audioBookContainer.style.display = "none";
    });
  }
  static closeAddModal(closeAddModalButton, formModal) {
    closeAddModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form");
    });
  }
}

export default Ui;
