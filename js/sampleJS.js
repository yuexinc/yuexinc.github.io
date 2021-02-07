function howdy(){
    var inputValue = prompt("Please enter your first name: ")
    alert("Howdy "+ inputValue);
}

function conditional(){
    alert("Use Inspect to see the console and inspect the code.");
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

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)) { //if the input value is not a number,
      alert(inputValue + " is not a number.");
    } else if (inputValue.length != 5){ //if the length of the number is not 5,
      alert(inputValue + " is not a five-character entity.");
    } else if (inputValue % 2 == 0){
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


function minOfDay(){
    var currentMinute = new Date().getHours() * 60 + new Date().getMinutes();
    alert("Current Minute of the Day: " + currentMinute);
}

function disappear(){
    var dropdown = document.getElementById('navbarDropdown')
    dropdown.style.display = "none";
}