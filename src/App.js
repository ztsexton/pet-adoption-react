const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Noodles",
      animal: "Dog",
      breed: "Italian Greyhound",
    }),
    React.createElement(Pet, {
      name: "Skittles",
      animal: "Dog",
      breed: "Chihuahua",
    }),
    React.createElement(Pet, {
      name: "Snowflake",
      animal: "Cat",
      breed: "White Floof",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
