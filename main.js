//Fahrenheit to Celsius Convertor
"use strict";

//Event Listener
document.getElementById("btn").addEventListener("click", calc);

//Event Function
function calc() {
    //Input
    // let cel = Number(documen.getElementById("input1").value);
    let fah = Number(document.getElementById("input2").value);

    //Process
    let final = (fah - '32')  * '5' / "9";

    //output
    document.getElementById("results").innerHTML = final;

}

