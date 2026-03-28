let display = document.getElementById("display");

// Ac
function Chutky1() {
    display.value = "";
}

// Delete
function Chutky2() {
    display.value = display.value.slice(0, -1);
}

// .
function Chutky3(val) {
    display.value += val;
}

// /
function Chutky4(val) {
    display.value += val;
}

// 7
function Chutky5() {
    display.value += "7";
}

// 8  
function Chutky6() {
    display.value += "8";
}

// 9
function Chutky7() {
    display.value += "9";
}

// *
function Chutky8() {
    display.value += "*";
}

// 4
function Chutky9() {
    display.value += "4";
}

// 5
function Chutky10() {
    display.value += "5";
}

// 6
function Chutky11() {
    display.value += "6";
}

// -
function Chutky12() {
    display.value += "-";
}

// 1
function Chutky13() {
    display.value += "1";
}

// 2
function Chutky14() {
    display.value += "2";
}

// 3
function Chutky15() {
    display.value += "3";
}

// +
function Chutky16() {
    display.value += "+";
}

// 00
function Chutky17() {
    display.value += "00";
}

// 0
function Chutky18() {
    display.value += "0";
}

// .
function Chutky19() {
    display.value += ".";
}

// =
function Chutky20() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}