function addNumber(event){
  // Get input
  let input = document.getElementById("myInput");

  // Set button 1
  let button1 = document.getElementById("button1");
  button1.removeEventListener("click", addNumber);
  button1.addEventListener("click", addNumber);

  // Set button 2
  let button2 = document.getElementById("button2");
  button2.removeEventListener("click", addNumber);
  button2.addEventListener("click", addNumber);
  
  // Clear button
  let clearButton = document.getElementById("clearButton")
  clearButton.addEventListener("click", clear)

  // Detects what button was pressed
  const clickedButton = event.target;
    
  // Operation
  switch(clickedButton){
    case button1:
      input.value +=1;
      break;
    case button2:
      input.value +=2;
      break;
    default:
      console.log("default");
  }

  function clear(){
    input.value = null;
  }

}