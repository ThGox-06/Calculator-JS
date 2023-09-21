let isOperation = false;
let notEqual = false;

function addNumber(event){
  // Get input
  let input = document.getElementById("myInput");

  const clickedButtonValue = event.target.getAttribute("data-value");

  const operations = ["+", "-", "*", "/", "."];
  const specificWords = ["equal", "clear", "delete"];

  // Clear functionality
  if(clickedButtonValue == "clear"){
    input.value = "";
  }
  
  // This sends the operations separately, but if the operations are together, it does not work
  if(operations.includes(clickedButtonValue) && isOperation == false){
    input.value += clickedButtonValue;
    isOperation = true;
    notEqual = true;
  // This sends the numbers
  } else if(!specificWords.includes(clickedButtonValue) && !operations.includes(clickedButtonValue)){
    input.value += clickedButtonValue;
    isOperation = false;
    notEqual = false;
  }
   
  
  // Equal functionality
  if(clickedButtonValue == "equal" && input.value != "" && notEqual == false){
      input.value = eval(input.value);
  }

  // Delete functionality
  if(clickedButtonValue == "delete"){
    input.value = input.value.slice(0, -1);
  }
}