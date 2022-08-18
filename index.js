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

//Limit Decimal Places
function limitDecimalPlaces(num, maxDigit = 10000000) {
  return Math.round(num * maxDigit) / maxDigit;
}

//Calculator Functionalities
function calculator(v1, v2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = v1 + v2;
      result = limitDecimalPlaces(result);
      return result;
    case "-":
      result = v1 - v2;
      result = limitDecimalPlaces(result);
      return result;
    case "x":
      result = v1 * v2;
      result = limitDecimalPlaces(result);
      return result;
    case "/":
      result = v1 / v2;
      result = limitDecimalPlaces(result);
      return result;
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

  //Removing 0 if someone press numerical button
  if (parseFloat(Display.innerText) === 0) {
    Display.innerText = "";
  }
  
  //Preventing multiple decimal (.) places
  if(e.target.innerText === ".") {
      if(Display.innerText.includes(".")) {
          return;
      }
  }

  //Concating numbers at the end
  Display.innerText += e.target.innerText;
});

OperatorButtons.addEventListener("click", function (e) {
  //Preventing Cascade Button Clicking
  //if outside the button clicked
  if (e.target.id === "operators") {
    return;
  }
  const currentDisplayValue = getElementValue("display");
  const previousValue = getElementValue("previous");
  const operator = e.target.innerText;

  const currentOperatorDisplaying = getElementValue("operator-sign");

  //You can change the operator before pressing numerical button
  if (currentDisplayValue === 0 && previousValue !== 0) {
    setElementValue("operator-sign", operator);
    return;
  }

  //Performs calculations if
  //you press operator button consequently
  if (currentOperatorDisplaying.length) {
    //Getting
    const result = calculator(
      previousValue,
      currentDisplayValue,
      currentOperatorDisplaying
    );

    setElementValue("previous", result);
    setElementValue("operator-sign", operator);
    setElementValue("display", "0");
    return;
  }

  setElementValue("previous", currentDisplayValue);
  setElementValue("operator-sign", operator);

  Display.innerText = "0";
});

EqualButton.addEventListener("click", function (e) {
  //Getting
  const currentlyDisplaying = getElementValue("display");
  const previousValue = getElementValue("previous");
  const operator = getElementValue("operator-sign");

  //Setting
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

//Clearing Currently displaying value
function clearDisplay() {
  setElementValue("display", "0");
}

//Clearing Everying on the display
//as well as previous value and operator
function clearEverythingOnDisplay() {
  setElementValue("display", "0");
  setElementValue("previous", "0");
  setElementValue("operator-sign", "");
}

//For Squaring Currently
//displaying number
function SQR() {
  const currentlyDisplaying = getElementValue("display");
  let result = currentlyDisplaying * currentlyDisplaying;
  setElementValue("display", limitDecimalPlaces(result));
}

//For Square Root of Currently
//displaying number
function SQRT() {
  const currentlyDisplaying = getElementValue("display");
  let result = Math.sqrt(currentlyDisplaying);
  setElementValue("display", limitDecimalPlaces(result));
}
//--------------------                  --------------------//
