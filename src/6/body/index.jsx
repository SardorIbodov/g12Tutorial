import React from "react";
import { database } from "../database";
let base = database;
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: base,
    };
    this.props.getData(this.state.students);
  }
  render() {
    const { students } = this.state;
    const deleteItem = (id) => {
      base = base.filter((s) => s.id !== id);
      this.setState({ students: base });
      this.props.getData(base);
    };
    return (
      <div>
        <h1>Key | State management</h1>
        {students.map((s) => (
          <h1 key={s.id}>
            {s.id}.{s.fullName}.{s.age}{" "}
            <button onClick={() => deleteItem(s.id)}>Delete</button>
          </h1>
        ))}
        <br />
        <h1>Studentlar soni: {students.length}</h1>
      </div>
    );
  }
}

export default Body;
