const theatherInput = document.querySelector('#theather');
const checkButton = document.querySelector('#checkButton');
const result = document.querySelector('#result');
checkButton.addEventListener('click', function() {
  
    const theather = theatherInput.value;

    console.log("Button clicked!");
    console.log(theather);

    if (theather === "tickets") {
        result.textContent = "Check out the AMC subscription options.";
    } else if (theather === "concessions") {
        result.textContent = "Check out the Cinemark subscription options.";
    } else if (theather === "both") {
        result.textContent = "Check out the Regal subscription options.";
    } else {
        result.textContent = "Please enter a valid movie choice.";
    }
});