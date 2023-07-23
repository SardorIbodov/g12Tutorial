import React, { useState, useEffect } from "react";

const Lesson8 = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [test, setTest] = useState("test");
  const [photos, setPhotos] = useState([]);

  //! 1
  // useEffect(() => {
  // 	console.log("1-holat");
  // }, [])
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => (res = res.json()))
  //     .then((res) => setPhotos(res));
  // }, []);

  //! 2
  // useEffect(() => {
  //   console.log("2-holat");
  // });

  //! 3
  // useEffect(() => {
  //   console.log("3-holat");
  // }, [count]);

  //! 4
  // useEffect(() => {
  //   console.log("4-holat");
  // }, [count, name]);

  return (
    <div>
      <h1>Functional component</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Minus
      </button>
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={({ target: { value } }) => {
          setName(value);
        }}
      />
      <h1>{test}</h1>
      <button
        onClick={() => {
          setTest("changed");
        }}
      >
        Test
      </button>
      <div>
        {photos.map((v, i) => {
          return i <= 100 && <img src={v.url} key={v.id} />;
        })}
      </div>
    </div>
  );
};

export default Lesson8;
