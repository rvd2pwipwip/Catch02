import React from "react"; //import dependencies with es6 modules syntax
import { render } from "react-dom"; //import render method to mount react component in div
// import App from "./components/App"; //mounted component must be imported in scope
import TestApp from "./components/TestApp";
import "./css/rvStyle.css"; //import global css
// import "./css/style.css"; //import global css

render(<TestApp />, document.getElementById("main")); //render react component in selected div
