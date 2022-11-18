import React from "react";
import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom";
import Home from './Home.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Home />
root.render(element);