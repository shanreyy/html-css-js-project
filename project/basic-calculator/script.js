const button = document.querySelectorAll("button");
const input = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
    const buttondone = button[i].textContent;

    if (buttondone === "C") {
        clearinput();
    }
    else if(buttondone === "="){
        calculate();
    }
    else{
        appendvalue(buttondone);
    }
    });
}

function clearinput(){
    input.value = "";
}

function calculate(){
    input.value = eval(input.value);
}

function appendvalue(buttondone){
    input.value += buttondone;
}
