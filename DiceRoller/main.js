const form = document.querySelector("[diceForm]");
const wrapper = document.querySelector(".wrapper");

const resH3 = document.createElement("h3");
resH3.id = "result";

const imgDiv = document.createElement("div");
imgDiv.id = "img-div";

form.addEventListener("submit", event => {
    event.preventDefault(); 
    rollDice();
})

function rollDice() {
    const numOfRolls = form.querySelector("[numInput]").value;
    const images = [];
    const values = [];

    for (let i = 0; i < numOfRolls; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        images.push(`<img src="./images/dice/${value}.png" alt="Num. ${value} die">`);
        values.push(value);
    }

    imgDiv.innerHTML = images.join(" ");
    resH3.textContent = `Rolled dice: ${values.join(", ")}`
}

wrapper.appendChild(resH3);
wrapper.appendChild(imgDiv);
