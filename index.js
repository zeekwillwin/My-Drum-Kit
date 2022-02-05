
//1. DETECTING BUTTON PRESS
var totalButtons = document.querySelectorAll(".drum").length; //this gives us an array and dictates how many items it contains

for (var i = 0; i < totalButtons; i++) { //this for loop starts at 0, runs through our array above and adds 1 after each iteration

    document.querySelectorAll(".drum")[i].addEventListener("click", function() { //the i starts at 0, the event listener listens for a click on the specific .drum element (button) we are on, and runs the function that gives us a sound based on the inner HTML of the .drum element we clicked on 

        var buttonInnerHTML = this.innerHTML; //this refers to the inner HTML text within the button that was clicked

        makeSound(buttonInnerHTML); //we called a function we created below were the input is the key clicked, the seven cases below cover the keys that are associated with the HTML buttons we created where each has a unique innerHTML content

        buttonAnimation(buttonInnerHTML);

    });

}


//2. DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event) { //this event listener checks the entire document for keyboard presses, then runs a function that calls on the makeSound method

    makeSound(event.key); //here the method takes the parameter "event", and digs into its .key property, then makes a sound based on the .key property (such as key: "w") that matches the 'case' within the switch function below. 

    buttonAnimation(event.key);


});


//3. FUNCTION THAT PLAYS SOUND BASED ON WHICH BUTTON WAS CLICKED OR WHICH KEY WAS PRESSED
function makeSound(key) { 

    switch (key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3"); //this case introduces a new object which is an Audio HTML element with the name "tom1" and a directory of the audio file it taps into
                tom1.play(); //the .play property allows u to play the tom1 audio object 
            break; //always include the break; at the end of each case
        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
        case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
        case "k":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
            break;
        case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
        default: //here is the default, in case none of the cases above cover what the user actually pressed 
    }  

}


//4. FUNCTION THAT RUNS ANIMATIONS BASED ON WHICH BUTTON WAS CLICKED OR WHICH KEY WAS PRESSED 
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey); //concatenation used to find the specific key required
        activeButton.classList.add("pressed"); //adding an exisitng css styling to the activeButton
        
    setTimeout(function() { //setTimeout function used to remove the pressed class from our activeButton after 100 milliseconds
        activeButton.classList.remove("pressed");
    }, 100)    

}

