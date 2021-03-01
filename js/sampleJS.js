function howdy() {
    var inputValue = prompt("Please enter your first name: ")
    alert("Howdy " + inputValue);
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("God day!");
    } else {
        alert("Good evening!");
    }
}
/* function evalNumber(parameters){
    var inputValue = Number(prompt("Enter any five-digit number without commas"))
    if (inputValue % 2 == 0){
     alert(inputValue + " is an even number.")
    } else {
     alert(inputValue + " is not an even number.")
    }
} */
function evalNumber() {
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)) { //if the input value is not a number,
        alert(inputValue + " is not a number.");
    } else if (inputValue.length != 5) { //if the length of the number is not 5,
        alert(inputValue + " is not a five-character entity.");
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.");
    } else {
        alert(inputValue + " is an odd number.")
    }
}
/*  } else if (Number.isInteger(inputValue) == false){
     //alert(inputValue + " is not an integer."); */
/*  } else if (inputValue.length > 6 || inputValue.length < 5){
       alert(inputValue + " is not a five or six-digit number.");
   } else if (inputValue.length == 6 && inputValue > 0){
       alert(inputValue + " is not a five-digit number."); */
function minOfDay() {
    var currentMinute = new Date().getHours() * 60 + new Date().getMinutes();
    alert("Current Minute of the Day: " + currentMinute);
}
function disappear() {
    var dropdown = document.getElementById('dog1')
    dropdown.style.display = "none";
}
function changeTitle() {
    let selectedElement = document.getElementById("table title");
    console.log(selectedElement);
    selectedElement.innerText = "POOPING Schedule";
}
function parentFunction() {
    let a = 1;
    function childFunction() {
        var b = a + 2;
        return b;
    };
    return childFunction();
}
function meow() {
    alert("Meooow");
}
function parseArray(array) {
    var newHair = prompt("enter a hairstyle");
    array.push(newHair);
    var x = array.sort();
    var y = x.length;
    console.log(x[y-1]);
    console.log(array);
}

var userArray = []
function sortArray(){
  var userInput = document.getElementById('inputTerm').value;
  var userOutput = document.getElementById('outputRow');
  userArray.push(userInput)
  console.log(userArray);
  document.getElementById('tempList').innerHTML = 'Unsorted list: '+userArray.join(", ");
  document.getElementById('inputTerm').value = '';
  if (userArray.length == 4) {
    userArray.sort();
    for (i in userArray) {
      var newLI = document.createElement('li');
      newLI.innerText = userArray[i];
      userOutput.appendChild(newLI);
    }
  };
}

var longestVal = "";
function longestValue(){
  var userInput = document.getElementById('inputTerm').value;
  if (userInput.length > longestVal.length) {
    longestVal = userInput;
  };
  document.getElementById('outputRow').innerText = longestVal;
}
