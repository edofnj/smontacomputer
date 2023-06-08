function handleClick(currentButtonId) {
  var currentButtonNumber = parseInt(currentButtonId);

  var nextButtonNumber = currentButtonNumber + 1;
  var nextButtonId = nextButtonNumber.toString();

  var nextButton = document.getElementById(nextButtonId);

  nextButton.scrollIntoView({ behavior: "smooth" });
}