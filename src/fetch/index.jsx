import React, { useEffect } from "react";

export const Fetch = () => {
  //! GET => oladi
  //! POST => qo'shadi
  //! PUT => o'zgartiradi
  //! DELETE => o'chiradi
	async function getData() {
		let response = await fetch("https://jsonplaceholder.typicode.com/users", {
			method: "GET",
		});
		let result = await response.json();
		console.log(result);
	}
  useEffect(() => {
		//! Promise
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "Delete",
    //   headers: {
    //     Type: "Application.json",
    //   },
    //   body: JSON.stringify({name: "wba", founded: 2020}),
    // })
    //   .then((res) => {
    //     return (res = res.json());
    //   })
    //   .then((res) => console.log(res));
		//! Async, await
		getData();
  }, []);
  return (
    <div>
      <h1>Fetch</h1>
    </div>
  );
};

export default Fetch;
