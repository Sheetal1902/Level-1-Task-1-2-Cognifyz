// script.js

// Function to change button color
document.getElementById('colorButton').addEventListener('click', function() {
    const button = document.getElementById('colorButton');
    if (button.style.backgroundColor === 'blue') {
        button.style.backgroundColor = 'red';
    } else {
        button.style.backgroundColor = 'blue';
    }


 // Display greeting based on the current time
 const now = new Date();
 const hours = now.getHours();
 let greeting;

 if (hours < 12) {
     greeting = 'Good Morning!';
 } else if (hours < 18) {
     greeting = 'Good Afternoon!';
 } else {
     greeting = 'Good Evening!';
 }

 alert(greeting);
});

//calculator

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.value === "=") {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                return;
            }

            if (button.dataset.value === "C") {
                display.innerText = "";
                return;
            }

            display.innerText += button.dataset.value;
        });
    });
});
