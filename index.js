//-------------------- FUNCTIONS --------------------//
//Grab Element Value
function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const floatConverted = parseFloat(element.innerText);

  return floatConverted || floatConverted === 0
    ? floatConverted
    : element.innerText;
}

//Set Element value
function setElementValue(elementId, updatedValue) {
  const element = document.getElementById(elementId);
  element.innerText = updatedValue;
}

//Calculator Functionalities
function calculator(v1, v2, operator) {
  switch (operator) {
    case "+":
      return v1 + v2;
    case "-":
      return v1 - v2;
    case "x":
      return v1 * v2;
    case "/":
      return v1 / v2;
    default:
      return 0;
  }
}
//--------------------                  --------------------//

//-------------------- Targets for EventListeners --------------------//

//--------- GROUP of BUTTONS --------------//
const NumericalPad = document.getElementById("numbers");
const OperatorButtons = document.getElementById("operators");

//--------- INDIVIDUAL BUTTONS --------------//
const EqualButton = document.getElementById("equal-operator");
const ClearButton = document.getElementById("clear-button");
//--------------------                  --------------------//

//Setting Display as Global Variable
var Display = document.getElementById("display");

//-------------------- EventListeners --------------------//
NumericalPad.addEventListener("click", function (e) {
  //Preventing Cascade Button Clicking
  //if outside the button clicked
  if (e.target.id === "numbers") {
    return;
  }

  if (parseFloat(Display.innerText) === 0) {
    Display.innerText = "";
  }
  Display.innerText += e.target.innerText;
});

OperatorButtons.addEventListener("click", function (e) {
  //Preventing Cascade Button Clicking
  //if outside the button clicked
  if (e.target.id === "operators") {
    return;
  }
  const currentDisplayValue = getElementValue("display");
  const operator = e.target.innerText;

  setElementValue("previous", currentDisplayValue);
  setElementValue("operator-sign", operator);

  Display.innerText = "0";
});

EqualButton.addEventListener("click", function (e) {
  //Getting
  const currentlyDisplaying = getElementValue("display");
  const previousValue = getElementValue("previous");
  const operator = getElementValue("operator-sign");

  setElementValue(
    "display",
    calculator(previousValue, currentlyDisplaying, operator)
  );

  setElementValue("previous", "0");
  setElementValue("operator-sign", "");
  e.stopPropagation();
});
//--------------------                  --------------------//

//-------------------- Event Functions --------------------//
function clearDisplay() {
  setElementValue("display", "0");
}

function SQR() {
  const currentlyDisplaying = getElementValue("display");
  setElementValue("display", currentlyDisplaying * currentlyDisplaying);
}

function SQRT() {
  const currentlyDisplaying = getElementValue("display");
  setElementValue("display", Math.sqrt(currentlyDisplaying));
}
