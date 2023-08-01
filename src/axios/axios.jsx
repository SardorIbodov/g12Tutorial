import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// Axios => kutubxona => response type(Array) => interceptors => version
// Fetch => Vanilla JS => response type(Parse) =>
export const Axios = () => {
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://jsonplaceholder.typicode.com/users",
  //   }).then((res) => console.log(res, "axios"));

  //   // axios
  //   //   .get("https://jsonplaceholder.typicode.com/users")
  //   //   .then((res) => console.log(res));

  //   // fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //   //   console.log(res, "fetch")
  //   // );
  // }, []);

  // const send = () => {
  //   // axios({
  //   // 	method: "GET",
  //   // 	url: "https://jsonplaceholder.typicode.com/users",
  //   // 	// headers: {
  //   // 	// 	"Content-Type": "application/json"
  //   // 	// },
  //   // 	// body: JSON.stringify({login: loginRef.current.value, password: passRef.current.value})
  //   // 	timeout: 500,
  //   // }).then(res => console.log(res));
  //   let controller = new AbortController();
  //   console.log(controller);
  //   // fetch("https://jsonplaceholder.typicode.com/users", {
  //   //   method: "GET",
  //   //   signal: controller.signal,
  //   // });
  //   // setTimeout(() => controller.abort(), 1000);
  //   controller.abort();
  // };

  const [data, setData] = useState([]);
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "wba product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  const send = () => {
    // axios({
    //   method: "POST",
    // 	headers: {
    // 		"Content-Type": "application/json",
    // 	},
    // 	body: JSON.stringify({
    // 		email: emailRef.current.value,
    // 		firstName: firstNameRef.current.value,
    // 		lastName: lastNameRef.current.value,
    // 		password: passwordRef.current.value,
    // 	}),
    //   url: "https://limitless-lake-55070.herokuapp.com/user/signup",
    // }).then((res) => console.log(res));
		// fetch('https://fakestoreapi.com/products/21')
		// .then(res=>res.json())
		// .then(json=>console.log(json))
  };

  return (
    <div>
      <h1>Axios</h1>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="text" placeholder="firstName" ref={firstNameRef} />
      <input type="text" placeholder="lastName" ref={lastNameRef} />
      <input type="text" placeholder="password" ref={passwordRef} />
      <button onClick={send}>Send request</button>
      {data.map((item) => {
        console.log(item);
        return (
          <div>
            <h1>{item.id}</h1>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
