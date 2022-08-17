//Grabbing Elements

//Function
//to grab Element Value
function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const floatConverted = parseFloat(element.innerText);

  return floatConverted;
}

//Function
//to set Element value
function setElementValue(elementId, updatedValue) {
  const element = document.getElementById(elementId);
  element.innerText = updatedValue;
}

//Targets for EventListeners
const NumericalPad = document.getElementById("numbers");
const OperatorButtons = document.getElementById("operators");
const EqualButton = document.getElementById("equal-operator");

//Setting Display as Global Variable
var Display = document.getElementById("display");

NumericalPad.addEventListener("click", function (e) {
  if (parseFloat(Display.innerText) === 0) {
    Display.innerText = "";
  }
  Display.innerText += e.target.innerText;
});

OperatorButtons.addEventListener("click", function (e) {
  const currentDisplayValue = getElementValue("display");
  setElementValue("previous", currentDisplayValue);
  const operator = e.target.innerText;
  Display.innerText = "0";
});

EqualButton.addEventListener("click", function (e) {
  console.log(Display.innerText);
});
