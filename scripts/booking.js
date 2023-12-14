/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let costPerDay = 35;
let numberOfDaysSelected = 0
let buttons = document.querySelectorAll("li");
let clearBtn = document.getElementById("clear-button");
let halfDayBtn = document.getElementById("half");
let fullDayBtn = document.getElementById("full");
let costElem = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function addClass(elem) {
    if (!elem.classList.contains("clicked")) {
        elem.classList.add("clicked");
        numberOfDaysSelected++; 
        calculate();
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        addClass(buttons[i]);

    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("clicked")
    }
    numberOfDaysSelected = 0;
    calculate();
}

clearBtn.addEventListener("click", clear);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfClickHandeler() {
    costPerDay = 20;
    halfDayBtn.classList.add("clicked");
    fullDayBtn.classList.remove("clicked");
    calculate();
}

halfDayBtn.addEventListener("click", halfClickHandeler);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullClickHandeler() {
    costPerDay = 35;
    fullDayBtn.classList.add("clicked");
    halfDayBtn.classList.remove("clicked");
    calculate();
}

fullDayBtn.addEventListener("click", fullClickHandeler);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    costElem.innerHTML = costPerDay * numberOfDaysSelected;
}