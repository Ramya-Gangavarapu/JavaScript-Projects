let a = document.getElementById("stopButton");
let b = document.getElementById("stopLight");
let c = document.getElementById("readyButton");
let d = document.getElementById("readyLight");
let e = document.getElementById("goButton");
let f = document.getElementById("goLight");

function buttonStop() {
    e.style.backgroundColor = "#1f1d41";
    f.style.backgroundColor = "#4b5069";
    c.style.backgroundColor = "#1f1d41";
    d.style.backgroundColor = "#4b5069";
    a.style.backgroundColor = "#cf1124";
    b.style.backgroundColor = "#cf1124";
}

function buttonReady() {
    c.style.backgroundColor = "#f7c948";
    d.style.backgroundColor = "#f7c948";
    b.style.backgroundColor = "#4b5069";
    e.style.backgroundColor = "#1f1d41";
    f.style.backgroundColor = "#4b5069";
    a.style.backgroundColor = "#1f1d41";
}

function buttonGo() {
    e.style.backgroundColor = "#199473";
    f.style.backgroundColor = "#199473";
    c.style.backgroundColor = "#1f1d41";
    d.style.backgroundColor = "#4b5069";
    a.style.backgroundColor = "#1f1d41";
    b.style.backgroundColor = "#4b5069";
}