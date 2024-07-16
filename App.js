import React from "react";
import ReactDOM from "react-dom/client";
// React Element=>jsx
const Heading = <h1>namaste React using jsx</h1>;
console.log(Heading);

// React Component
// Class Based Component - OLD
// Functional COmponent - NEW

// react Functional component is just a normal js function that returns some piece of jsx
// component composition when we use components inside a component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
// const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
