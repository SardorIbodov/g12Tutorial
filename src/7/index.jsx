import React from "react";
import Child from "./child";

class Lesson7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  render() {
    return (
      <div>
				{this.state.display && <Child />}
				<h1>Salom</h1>
				<button onClick={() => this.setState({display: false})}>Delete</button>
      </div>
    );
  }
}

export default Lesson7;
