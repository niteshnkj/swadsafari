import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement = >  ReactElement-js Object => HTMLELEMENT(render)
// const heading = React.createElement("h1", {}, "Namaste Bhai");
// console.log(heading);

// JSX - HTML like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) - Parcel - Babel
// jSX =>Babel transpiles it to React.createElement => ReactElement-JS Object => HtmlElement(render)
const Heading = <h1>namaste React using jsx</h1>;
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
