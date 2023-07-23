import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import Menu from "./navbar/navbar";
// import { base } from "./mock";
// import { database } from "./database";
// import List from "./list";
// import Card from "./card";
// import Lesson3 from "./3";
// import Lesson4 from "./4";
// import Lesson5 from "./5";
// import CRUD from "./crud";
// import Lesson6 from "./6";
// import Lesson7 from "./7";
// import Lesson8 from "./8";
// import Filter from "./houzing";
// import UseReducer from "./useReducer";
// import Todo from "./todo";
// import Context from "./context/root";
// import Context2 from "./context2/root";
import LocalStorage from "./localStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Menu data={["Home", "About", "Gallery", "Contact", "Service"]}></Menu>
    <List data={base} />
    <div>
      {database.map(item => {
				return <Card data={item}/>
			})}
    </div> */}
    {/* <Lesson3 /> */}
    {/* <Lesson4 /> */}
    {/* <Lesson5 /> */}
    {/* <CRUD /> */}
    {/* <Lesson6 /> */}
    {/* <Lesson7 /> */}
    {/* <Lesson8 data="ourData"/> */}
		{/* <Filter /> */}
		{/* <UseReducer /> */}
		{/* <Todo /> */}
		{/* <Context /> */}
		{/* <Context2 /> */}
		<LocalStorage />
  </>
);
