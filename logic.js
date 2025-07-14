const slotone = document.querySelector("#slot1")
const slottwo = document.querySelector("#slot2")
const slotthree = document.querySelector("#slot3")
const rollbutton = document.querySelector("#slotroll")
const gamblingwinnning = document.querySelector("#wingambling")
let wins = 0
let rolls = 0

function rollvalues() {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const num3 = Math.floor(Math.random() * 10) + 1

    rolls++

    slotone.innerHTML = num1
    slottwo.innerHTML = num2
    slotthree.innerHTML = num3

    victories(num1, num2, num3)
}

function victories(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        wins++
        alert(`Goodjob! You now have ${wins} wins!`)
        wingambling.style.display = "flex";
    }
    setTimeout(() => {
    wingambling.style.display = "none";
}, 9000);
}
rollbutton.addEventListener("click", rollbutton)
