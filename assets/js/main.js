const tipOutput = document.querySelector("#tip");
const endSumOutput = document.querySelector("#endSum");
const perPersonOutput = document.querySelector("#perPerson");

const slcOption = document.querySelectorAll("#options");
console.log(slcOption);

let perc = 0;

const tipCalculator = () => {
    let amount = document.querySelector("#amount").value;
    let people = document.querySelector("#people").value;

    let value = null;

    let tip = 0;
    let sum = 0;
    let perGuest = 0;

    slcOption.forEach(element => {
        value = element.value;
    });
    console.log(value);

    switch (value) {
        case "okay":
            perc = 20;
            break;
        case "super":
            perc = 15;
            break;
        case "great":
            perc = 10;
            break;
        case "not_so_bad":
            perc = 5;
            break;
        case "bad":
            perc = 0;
            break;
    }

    tip = Number(amount) * perc / 100;
    sum = Number(amount) + tip;
    perGuest = sum / people;

    tipOutput.innerHTML = tip;
    endSumOutput.innerHTML = sum;
    perPersonOutput.innerHTML = perGuest;

    document.getElementById("div_output").style.visibility = "visible";
}

function calcTip() {
    tipCalculator();
}