


const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
            display.textContent = "0";

        } else if (value === "Backspace") {
            display.textContent = display.textContent.slice(0, -1);
            if (display.textContent === "") display.textContent = "0";
        }

        else if (value === "=") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error";
            }
        }

        else {
            if (display.textContent === "0") display.textContent = "";
            display.textContent += value;
        }
    });

});

const logo = document.querySelector(".logo"); // dacă ai logo-ul de comentat, de-comentează-l

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (logo) {
            logo.style.opacity = "0";
        }
    });
});