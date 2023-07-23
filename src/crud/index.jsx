import React from "react";
import { database } from "./database";
import { Image, Box, Btn, Container } from "./style";
import Rasm from "./download.jpg";
let base = database;

class CRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: base,
      sortType: "id",
      newFullname: "",
      newAge: "",
      selectedStudent: null,
      editedFullname: "",
      editedAge: "",
			test: "test"
    };
  }
  render() {
    const {
      students,
      sortType,
      newFullname,
      newAge,
      selectedStudent,
      editedFullname,
      editedAge,
    } = this.state;
    //! Delete
    const deleteStudent = (id) => {
      base = base.filter((s) => s.id !== id);
      this.setState({ students: base });
    };
    //! Read
    //? Find
    const findStudent = (searchedStudent) => {
      let res = base.filter((s) =>
        s.fullName.toLowerCase().includes(searchedStudent.toLowerCase())
      );
      this.setState({ students: res });
    };
    //? Sort
    const sortStudent = () => {
      let res = base.sort((a, b) => {
        if (sortType === "id") return a.id - b.id;
        else if (sortType === "fullName")
          return a.fullName.localeCompare(b.fullName);
        else return a.age - b.age;
      });
      this.setState({ students: res });
    };
    //! Create
    function* generateId() {
      let length = base.length;
      while (true) {
        yield ++length;
      }
    }
    const addStudent = () => {
      base = [
        ...base,
        { id: generateId().next().value, fullName: newFullname, age: newAge },
      ];
      this.setState({ students: base });
    };
    //! Edit
    const save = (id) => {
      base = base.map((s) => {
        return s.id === id
          ? {
              ...s,
              fullName: editedFullname,
              age: editedAge,
            }
          : s;
      });
      this.setState({ students: base, selectedStudent: null });
    };

    return (
      <div>
        <Image src={Rasm} alt="Photo" />
        <Box />
        <Btn>Salom</Btn>
        <h1>CRUD</h1>
        <Container>
          <Box />
          <Box />
          <Box />
        </Container>

        <div className="find">
          <input
            type="text"
            placeholder="Type to search"
            onChange={({ target: { value } }) => findStudent(value)}
          />
        </div>
        <div className="sort">
          <select
            onChange={({ target: { value } }) =>
              this.setState({ sortType: value })
            }
          >
            <option value="id">Id</option>
            <option value="fullName">Fullname</option>
            <option value="age">Age</option>
          </select>
          <button onClick={sortStudent}>Sort</button>
        </div>
        <div className="add">
          <input
            type="text"
            placeholder="Fullname"
            value={newFullname}
            onChange={({ target: { value } }) =>
              this.setState({ newFullname: value })
            }
          />
          <input
            type="number"
            placeholder="Age"
            value={newAge}
            onChange={({ target: { value } }) =>
              this.setState({ newAge: value })
            }
          />
          <button
            onClick={() => {
              addStudent();
              this.setState({ newFullname: "", newAge: "" });
            }}
          >
            Add
          </button>
        </div>

        {students.map(({ id, fullName, age }) => (
          <h1>
            {id}.
            {id === selectedStudent ? (
              <input
                type="text"
                defaultValue={fullName}
                onChange={({ target: { value } }) =>
                  this.setState({ editedFullname: value })
                }
              />
            ) : (
              fullName
            )}
            {id === selectedStudent ? (
              <input
                type="number"
                defaultValue={age}
                onChange={({ target: { value } }) =>
                  this.setState({ editedAge: value })
                }
              />
            ) : (
              age
            )}{" "}
            yosh
            <button onClick={() => deleteStudent(id)}>Delete</button>
            {selectedStudent === id ? (
              <span>
                <button onClick={() => save(id)}>Save</button>
                <button
                  onClick={() => this.setState({ selectedStudent: null })}
                >
                  Cancel
                </button>
              </span>
            ) : (
              <button
                onClick={() =>
                  this.setState({
                    selectedStudent: id,
                    editedFullname: fullName,
                    editedAge: age,
                  })
                }
              >
                Edit
              </button>
            )}
          </h1>
        ))}

				<button onClick={() => {
					this.setState({test: "changed"}, () => {
						console.log(this.state.test, "setState");
					});
					console.log(this.state.test);
				}}>Test button</button>
      </div>
    );
  }
}

export default CRUD;
