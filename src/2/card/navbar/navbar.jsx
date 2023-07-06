import React from "react";
import "./navbar.css";

export class Navbar extends React.Component {
  render() {
    const { data, children } = this.props;
    console.log(this);
    return (
      <div>
        <div className="menu">
          {data.map((item) => {
            return <h3>{item}</h3>;
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;
