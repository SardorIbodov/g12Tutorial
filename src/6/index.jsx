import React from "react";
import Body from "./body";
import Header from "./header";

class Lesson6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
    };
  }
  getData = (data) => {
    this.setState({ students: data });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header data={this.state.students} />
        <Body getData={this.getData} />
      </div>
    );
  }
}

export default Lesson6;
