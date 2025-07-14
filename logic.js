const slotone = document.querySelector("#slot1");
const slottwo = document.querySelector("#slot2");
const slotthree = document.querySelector("#slot3");
const rollbutton = document.querySelector("#slotroll");
const gamblingwinnning = document.querySelector("#wingambling");
const wincount = document.querySelector("#win-count");
const rollcount = document.querySelector("#roll-count");
const moneycount = document.querySelector("#money-count");

let wins = 0;
let rolls = 0;
let money = 0;

function rollvalues() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 10) + 1;

    rolls = rolls + 0.5;
    rollcount.innerHTML = rolls;

    slotone.innerHTML = num1;
    slottwo.innerHTML = num2;
    slotthree.innerHTML = num3;

    victories(num1, num2, num3);
}
function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.innerText = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 4000);
}

function victories(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        wins++;
        money += 10000;
        gamblingwinnning.style.display = "flex";
        showPopup("You won $10.000! Goodjob buddy!")
        setTimeout(() => {
            gamblingwinnning.style.display = "none";
        }, 4000);
    }

    wincount.innerHTML = wins;
    moneycount.innerHTML = `$${money.toLocaleString()}`;
}

rollbutton.addEventListener("click", rollvalues);
