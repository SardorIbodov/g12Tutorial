import React from "react";

class Lesson3 extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 1,
      inp: "",
      language: "uz",
      isDark: false,
    };
  }
  render() {
    console.log("render");
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    const onInputChange = ({ target: { value } }) => {
      this.setState({ inp: value });
    };
    const onSelectChange = ({ target: { value } }) => {
      this.setState({ language: value });
    };
    const sayHello = (lang) => {
      switch (lang) {
        case "uz":
          return "Assalomu alaykum";
        case "ru":
          return "Привет";
        case "en":
          return "Hello";
      }
    };
    const onCheckbox = () => {
      this.setState({ isDark: !this.state.isDark });
    };
    return (
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          background: this.state.isDark ? "#333" : "white",
          color: this.state.isDark ? "white" : "#333",
        }}
      >
        <h1>Lesson 3 | State</h1>
        <h2>{this.state.count}</h2>
        <button onClick={minus}>Minus</button>
        <button onClick={plus}>Plus</button>
        <br /> <br /> <br />
        <h1>{this.state.inp}</h1>
        <input
          type="text"
          placeholder="Type something"
          onChange={onInputChange}
        />
        <select name="" id="" onChange={onSelectChange}>
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
        <h2>{sayHello(this.state.language)}</h2>
        <input type="checkbox" onClick={onCheckbox} />{" "}
        <span>{this.state.isDark ? "Tungi rejim" : "Kunduzgi rejim"}</span>
      </div>
    );
  }
}

export default Lesson3;
