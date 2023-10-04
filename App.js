const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h2 tag from div div"),
    React.createElement("h2", {}, "i am h2 tag from div div"),
  ])
);

/*const heading = React.createElement(
  "h2",
  { id: "heading" },

  "Hello team !  from react CDN"
);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
