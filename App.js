// create element using React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// create root where we put that element using React-DON
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element
root.render(heading);
