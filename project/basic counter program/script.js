const increment = document.getElementById("incrementBtn");
const decrement = document.getElementById("decrementBtn");
const reset = document.getElementById("resetBtn");
const p = document.getElementById("p");

let count = 0;

increment.addEventListener("click", () => {
    count++;
    p.textContent = count;
});

decrement.addEventListener("click", () => {
    count--;
    p.textContent = count;
});

reset.addEventListener("click", () => {
    count = 0;
    p.textContent = count;
});
