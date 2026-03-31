const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

function adjustFontSize() {
    const length = display.textContent.length;

    if (length > 10) {
        display.style.fontSize = "40px";
    } else if (length > 6) {
        display.style.fontSize = "60px";
    } else {
        display.style.fontSize = "80px";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
            display.textContent = "0";
        }

        else if (value === "Backspace") {
            display.textContent = display.textContent.slice(0, -1);
            if (display.textContent === "") display.textContent = "0";
        }

        else if (value === "=") {
            try {
                let expression = display.textContent;


                expression = expression.replace(/x/g, "*");


                expression = expression.replace(
                    /(\d+(\.\d+)?)([+\-])(\d+(\.\d+)?)%/g,
                    (match, num1, _, operator, num2) => {
                        return `${num1}${operator}(${num1}*${num2}/100)`;
                    }
                );

                expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

                let result = eval(expression);


                display.textContent = Number.isInteger(result)
                    ? result
                    : parseFloat(result.toFixed(6));

            } catch {
                display.textContent = "Error";
            }
        }

        else {
            if (display.textContent === "0") display.textContent = "";
            display.textContent += value;
        }


        adjustFontSize();
    });
});

const logo = document.querySelector(".logo");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (logo) {
            logo.style.opacity = "0";
        }
    });
});