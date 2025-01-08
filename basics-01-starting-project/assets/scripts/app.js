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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

/*this is comment */
//Constants from vendor file

function calculate(operation) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let operator;
  if (operation === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (operation === "DIVIDE") {
    currentResult /= enteredNumber;
    operator = "/";
  }
  createLog(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
