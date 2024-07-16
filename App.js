import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement = >  ReactElement-js Object => HTMLELEMENT(render)
const heading = React.createElement("h1", {}, "Namaste Bhai");
console.log(heading);

// JSX - HTML like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) - Parcel - Babel
// jSX => React.createElement => ReactElement-JS Object => HtmlElement(render)
const jsxHeading = <h1>namaste React using jsx</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
