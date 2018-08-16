import React from "react"; //import dependencies with es6 modules syntax
import { render } from "react-dom"; //import render method to mount react component in div
import "./css/rvStyle.css"; //import global css
import Router from "./components/Router";

render(<Router />, document.getElementById("main")); //render react component in selected div
