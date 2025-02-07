function myAdd() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let output = first + second;
    if (output < 0) {
        document.getElementById("output").setAttribute("class", "negative");
    } else {
        document.getElementById("output").setAttribute("class", "");
    }
    document.getElementById("output").innerHTML = String(output);
}

function mySubtract() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let output = first - second;
    if (output < 0) {
        document.getElementById("output").setAttribute("class", "negative");
    } else {
        document.getElementById("output").setAttribute("class", "");
    }
    document.getElementById("output").innerHTML = String(output);
}

function myMultiply() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let output = first * second;
    if (output < 0) {
        document.getElementById("output").setAttribute("class", "negative");
    } else {
        document.getElementById("output").setAttribute("class", "");
    }
    document.getElementById("output").innerHTML = String(output);
}

function myDivide() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let output = first / second;
    if (output < 0) {
        document.getElementById("output").setAttribute("class", "negative");
    } else {
        document.getElementById("output").setAttribute("class", "");
    }
    document.getElementById("output").innerHTML = String(output);
}

function myPower() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let output = first;
    for (let i = 1; i < second; i++) {
        output = output * first;
    }
    if (output < 0) {
        document.getElementById("output").setAttribute("class", "negative");
    } else {
        document.getElementById("output").setAttribute("class", "");
    }
    document.getElementById("output").innerHTML = String(output);
}

function myClear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").setAttribute("class", "");
    document.getElementById("output").innerHTML = "";
}