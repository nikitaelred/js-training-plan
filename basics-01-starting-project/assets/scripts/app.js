const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Get input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createLog(operator, resultBaforeCalc, calcNumber) {
  const description = `${resultBaforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, description); //from vendor file
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createLog("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber,currentResult);
  
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createLog("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber,currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createLog("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber,currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createLog("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber,currentResult);
}

//Constants from vendor file
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
