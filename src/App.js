// const Pet = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1",{}, "Luna"),
//         React.createElement("h3", {}, "Dog"),
//         React.createElement("h3", {}, "Havanese")
//     ]);
const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]);
  };
  
  const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
    ]);
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));

  //above are the old fashioned way of writing React, which are now replaced by Jsx 