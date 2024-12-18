//create nested elements using react
/*
<div id="parent">
   <div id="child">
      <h1>I am a Nested Element</h1>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am a Nested Element")
  )
);

// create root where we put that element using React-DON
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element
console.log(parent);

root.render(parent);
