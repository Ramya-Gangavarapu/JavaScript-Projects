let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let pCv = counterElement.textContent;
    let uCv = parseInt(pCv) + 1;
    counterElement.textContent = uCv;

    if (uCv > 0) {
        counterElement.style.color = "green";
    } else if (uCv < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

}

function onReset() {
    counterElement.textContent = 0;
    console.log(counterElement);
    counterElement.style.color = "black";
}

function onDecrement() {
    let pCv = counterElement.textContent;
    let uCv = parseInt(pCv) - 1;
    counterElement.textContent = uCv;
    if (uCv > 0) {
        counterElement.style.color = "green";
    } else if (uCv < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

}