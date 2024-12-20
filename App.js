//create nested elements with childs and each child has siblings using react
/*
<div id="parent">
   <div id="child1">
      <h1>I am a Nested Element</h1>
      <h2>I am a Nested Element</h2>
    </div>
   <div id="child2">
      <h1>I am a Nested Element</h1>
      <h2>I am a Nested Element</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag of child1 "),
    React.createElement("h2", {}, "I am h2 tag of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag child2"),
    React.createElement("h2", {}, "I am h2 tag child2"),
  ]),
]);

// create root where we put that element using React-DON
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element
console.log(parent);

root.render(parent);
