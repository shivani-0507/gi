const heading = React.createElement("h1", {id: "heading"},
     [React.createElement("h1", {id: "heading"}, "Hello From first child"),
     React.createElement("h1", {id: "heading"},"Hello From second sibling child")]
    );
console.log("heading", heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)