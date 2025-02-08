class Ui {
  static toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    audioFields,
    printedFields,
    bookType
  ) {
    // Hide both containers initially
    printedBookContainer.style.display = "none";
    audioBookContainer.style.display = "none";
    // Reset the values of both categories
    printedFields.forEach((field) => (field.value = ""));
    audioFields.forEach((field) => (field.value = ""));
    // Display the relevant container based on user selection
    if (bookType.value === "printed-book") {
      printedBookContainer.style.display = "block";
    } else {
      audioBookContainer.style.display = "block";
    }
  }
}

export default Ui;
