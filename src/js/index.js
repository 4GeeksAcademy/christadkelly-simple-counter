//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter";

//render your react application

let counter = 0;
function secondsCounter(){
    console.log(counter++);
    let ones = Math.floor(counter/1) % 10;
    let tens = Math.floor(counter/10) % 10;
    let hundreds = Math.floor(counter/100) % 10;
    let thousands = Math.floor(counter/1000) % 10;
    let tenThousands = Math.floor(counter/10000) % 10;
    let hundredThousands = Math.floor(counter/100000) % 10;
    ReactDOM.render(<SecondsCounter 
        Value1 = {ones} 
        Value2 ={tens}
        Value3 = {hundreds} 
        Value4 ={thousands}
        Value5 = {tenThousands} 
        Value6 ={hundredThousands}
        />, document.querySelector("#app"));
};

window.onload = setInterval(secondsCounter,1000);