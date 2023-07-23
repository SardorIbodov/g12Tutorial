import React from "react";
import { database } from "./database";
const base = database;
class Lesson4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surName: "",
      students: base,
    };
  }
  render() {
    const { firstName, surName, students } = this.state;
    // const onChangeName = ({ target: { value } }) => {
    //   this.setState({ firstName: value });
    // };
    // const onChangeSurName = ({ target: { value } }) => {
    //   this.setState({ surName: value });
    // };
    const onChangeInfo = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };
    const onSearch = ({ target: { value } }) => {
      let filtered = base.filter((s) =>
        s.fullName.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ students: filtered });
    };
    return (
      <div>
        <h1>State | 2</h1>
        <h1>Ism: {firstName}</h1>
        <h1>Familiya: {surName}</h1>
        <input
          type="text"
          name="firstName"
          placeholder="Ism kiriting"
          onChange={onChangeInfo}
        />
        <br />
        <input
          type="text"
          name="surName"
          placeholder="Familiya kiriting"
          onChange={onChangeInfo}
        />
        <hr />
        <input type="text" placeholder="Type to search" onChange={onSearch} />
        {students.map((s) => (
          <h1>
            {s.id}. {s.fullName}
          </h1>
        ))}
      </div>
    );
  }
}

export default Lesson4;
