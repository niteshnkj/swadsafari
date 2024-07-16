import React from "react";
import ReactDOM from "react-dom/client";
// React Element=>jsx
const title = <h1>namaste React using jsx</h1>;

// React Component
// Class Based Component - OLD
// Functional COmponent - NEW

// react Functional component is just a normal js function that returns some piece of jsx
// component composition when we use components inside a component
const HeadingComponent = () => {
  return (
    <>
      {title}
      <h1>Namaste React Functional Component</h1>
      {/* <Title /> */}
    </>
  );
};
// const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
