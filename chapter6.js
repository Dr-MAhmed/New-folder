// Problem No - 01
// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if can drive!
let age = prompt("Whats your age?");
age < 18 ?
    alert("You cannot drive") :
    age >= 18 && age <= 65 ?
    alert("You can drive") :
    alert("you are old now so you cannot drive");

// Problem No - 02
// In Q-1, use confirm to ask the user if he wants to see the prompt again.
let runAgain = false;
const canDrive = (age1) => {
    
    return age1 >= 18 ? true : false;
};

while (runAgain) {
    let age1 = prompt("Whats your age?");
    if (age1 < 0) {
        alert("Please enter a valid age");
        break;
    }
    if (canDrive(age1)) {
        alert("You can drive");
    } else {
        alert("You cannot drive");
    }
    runAgain = confirm("Do you want to see the prompt again?");
}

// Problem No - 03
// In the previous Q, use console.error to log the error if the age entered is negative.
let runAgain1 = true;
const canDrive1 = (age2) => {
    return age2 >= 18 ? true : false;
};

while (!runAgain1) {
    let age2 = prompt("Whats your age?");
    if (age2 < 0) {
        console.error("Please enter a valid age");
        break;
    }
    if (canDrive1(age2)) {
        alert("You can drive");
    } else {
        alert("You cannot drive");
    }
    runAgain1 = confirm("Do you want to see the prompt again?");
}

// Problem No - 04
// Write a program to change the url to google.com (redirection) if user enters a number greater than 4.
let runAgain2 = true;
let num = prompt("Enter a number");
num = Number.parseInt(num);

if (num > 4) {
    location.href = "https://drmahmed-portfolio.vercel.app/";
} else {
    while (runAgain2) {
        num = prompt("Enter a number");
        num = Number.parseInt(num);
        if (num > 4) {
            location.href = "https://drmahmed-portfolio.vercel.app/";
            break;
        } else {
            alert("Please enter a number between 1 and 4");
        }
    }
}

// Problem No - 05
// Change the background of the page to yellow, red or any other color based on user input through prompt.
let askAgain = true;
function changeBackgroundColor() {
    let color = prompt("Enter the color you want to see on web page background.");
    let page = document.getElementById("bg-color");
    page.style.backgroundColor = color;

    setTimeout(() => {
        askAgain = confirm("Do you want to change the color again?");
        if (askAgain) {
            changeBackgroundColor(); // Call the function recursively if user wants to change color again
        }
    }, 1500);
}

changeBackgroundColor();
