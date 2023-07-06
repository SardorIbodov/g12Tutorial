import React from "react";
import ReactDOM from "react-dom/client";
// import Menu from "./navbar/navbar";
// import { base } from "./mock";
// import { database } from "./database";
// import List from "./list";
// import Card from "./card";
import Lesson3 from "./3";

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
    <Lesson3 />
  </>
);
