const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

// Validates number input based on regular expression
const validateNumber = num => {
    if (num.length < 10) { return false; }

    const trimmedNum = num.replace(/\s/g, "");
    const numberRegex = /1?(\(([0-9][0-9][0-9])\)|([0-9][0-9][0-9]))-?([0-9][0-9][0-9])-?([0-9][0-9][0-9])/;

    return trimmedNum.match(numberRegex);
}

// Event listener for check button
checkBtn.addEventListener("click", e => {
    e.preventDefault();

    if (!userInput.value) { alert("Please provide a phone number"); }
    else {
        if (validateNumber(userInput.value)) {
            results.textContent = `Valid US number: ${userInput.value}`;
        } else {
            results.textContent = `Invalid US number: ${userInput.value}`;
        }
    }
    userInput.value = "";
})

// Clears input field upon button press
clearBtn.addEventListener("click", e => {
    e.preventDefault();
    results.textContent = "";
})