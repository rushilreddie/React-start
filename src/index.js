import React from "react";
import ReactDOM from "react-dom";

const fname = "Rushil";
const lname = "E";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>rushil Your lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);
