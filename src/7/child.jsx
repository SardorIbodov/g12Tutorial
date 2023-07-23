import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
			test: "ishlamadi"
    };
    console.log("constructor");
  }
  getDerivedStateFromProps = () => {
    console.log("getDerivedStateFromProps");
    return null;
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate = () => {
		console.log("componentDidUpdate");
  };

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

  render() {
    console.log("render");
    return (
      <div>
        <h1>LifeCycles</h1>;<h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Plus
        </button>
				<h1>{this.state.test}</h1>
      </div>
    );
  }
}

export default Child;
