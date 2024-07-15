/**
 * <div id="parent">
 * <div id="children">
 * <h1>I'm children</h1>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "h1" }, "I'm an h1 tag"),
  React.createElement("div", { id: "h2" }, "I'm an h2 tag"),
]);
console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World form React"
);
// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
