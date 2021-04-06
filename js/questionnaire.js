const buttons = document.querySelectorAll('.form-question-choice');

buttons.forEach(button => {
    button.addEventListener('click', questionClick);
});



function questionClick (event) {
   toggleQuestionClass(event);

   total();

  const totalScore = total();
   severity(totalScore);

}



// Function to toggle the css class of the buttons (active)
function toggleQuestionClass (event) {

     // Get the parent row of the question which was clicked, and turn it into an array
     const questionRow = Array.from(event.target.parentElement.children);
     // Loop through array, if the current question is not the same as the button clicked, then remove the class (this ensures that users can toggle the same button on and off)
     questionRow.forEach(question => {
         if (question != event.target) {
            question.classList.remove('form-question-choice-active');
         }

     });
 
     // Toggle the active class - if the class is already on the button, it will remove it, and if the class is not, then it will add it.
     event.target.classList.toggle('form-question-choice-active');

}



// Function to get the total value of all active buttons
function total () {
    // Get all the active buttons
    const activeButtons = document.querySelectorAll('.form-question-choice-active');

    const totalField = document.querySelector('#total');
    console.log(totalField);
    // Make total 0
    let total = 0;

    // Loop through each active button
    activeButtons.forEach(button => {
        // Add each number (value of active buttons) to the total
        total += Number(button.innerText);
    });
    // Set Total on page
    totalField.innerText = `The total is: ${total}`;
    return total;
}

 // Function to get the severity, depending on the total

function severity(total) {
    const severityField = document.querySelector('#severity');


    if (total === 0){
        severity.innerText = "All zero"
    } else if (total > 0 && total < 5) {  
        severityField.innerText = "Minimal Depression";
    } else if (total > 4 && total < 10) {
        severityField.innerText = "Mild Depression";
    } else if (total > 9 && total < 15) {
        severityField.innerText = "Moderate Depression";
    } else if (total > 14 && total < 20) {
        severityField.innerText = "Moderately Severe Depression";
    } else if (total >  19) {
        severityField.innerText = "Severe Depression";
    } 
}