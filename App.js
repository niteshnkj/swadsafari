/**
 * <div id="parent">
 *      <div id="children">
 *          <h1>I'm children</h1>
 *          <h2>I'm children</h2>
 *      </div>
 * <div id="children">
 *          <h1>I'm children</h1>
 *          <h2>I'm children</h2>
 *      </div>
 * </div>
 *
 * reactElement(Object)=>HTML(Browser Understands)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm an h2 tag"),
  ]),
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
