const slotone = document.querySelector("#slot1");
const slottwo = document.querySelector("#slot2");
const slotthree = document.querySelector("#slot3");
const rollbutton = document.querySelector("#slotroll");
const gamblingwinning = document.querySelector("#wingambling");
const wincount = document.querySelector("#win-count");
const rollcount = document.querySelector("#roll-count");
const moneycount = document.querySelector("#money-count");

let wins = 0;
let rolls = 0;
let money = 0;
let isRolling = false; // Prevent spam-clicking

function rollvalues() {
    if (isRolling) return; // Don't allow rolling while already in progress
    isRolling = true;

    rolls++; // Increment by 1 (not 0.5)
    rollcount.textContent = rolls;

    // Reset slots to "?" before rolling
    slotone.textContent = "?";
    slottwo.textContent = "?";
    slotthree.textContent = "?";

    // Simulate spinning animation
    setTimeout(() => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const num3 = Math.floor(Math.random() * 10) + 1;

        slotone.textContent = num1;
        slottwo.textContent = num2;
        slotthree.textContent = num3;

        victories(num1, num2, num3);
        isRolling = false;
    }, 500); // 0.5s delay for "spinning" effect
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.style.display = "block";

    // Clear any existing timeout to avoid overlap
    if (popup.timeoutId) clearTimeout(popup.timeoutId);
    popup.timeoutId = setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}

function victories(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        wins++;
        money += 10000;
        gamblingwinning.style.display = "flex";
        showPopup(`You won $${money.toLocaleString()}! Good job!`);

        setTimeout(() => {
            gamblingwinning.style.display = "none";
        }, 3000);
    }

    wincount.textContent = wins;
    moneycount.textContent = `$${money.toLocaleString()}`;
}

rollbutton.addEventListener("click", rollvalues);