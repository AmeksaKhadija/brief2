
const incrementButtons = document.querySelectorAll(".plus");
const decrementButtons = document.querySelectorAll(".moin");
const numberDisplays = document.querySelectorAll(".one");

function incrementNumber(display) {
    let number = parseInt(display.textContent);
    number++;
    display.textContent = number;
}


function decrementNumber(display) {
    let number = parseInt(display.textContent);
    if (number > 1) {
        number--;
        display.textContent = number;
    }
}


incrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        incrementNumber(numberDisplays[index]);
    });
});


decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        decrementNumber(numberDisplays[index]);
    });
});
