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

NumericalPad.addEventListener("click", function (e) {
  const Display = document.getElementById("display");
  if (parseFloat(Display.innerText) === 0) {
    Display.innerText = "";
  }
  Display.innerText += e.target.innerText;
});
