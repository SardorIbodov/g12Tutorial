import React, { useMemo, useCallback } from "react";

//! useMemo     || bu hook              || Funksiyani qiymatini (return) ni saqlaydi
//! useCallback || bu hook              || Funksiyani o'zini saqlaydi                || Parameter bersak bo'ladi
//! React.memo  || high order component 

export const IsFive = React.memo((props) => {
  console.log("IsFive");
  const getData = useCallback((p, q) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    if (props.count === 0) return `Nol soni ${p} ${q}`;
    else return "Besh soni emas";
  }, [props.count]);
	console.log(getData, "farq");
	// const getData = useCallback((param) => {
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   if (props.count === 0) return `Nol soni ${param}`;
  //   else return `Besh soni emas ${param}`;
  // }, [props.count]);
  return <span>{getData("Webbrain", "academy")}</span>;
});

export default IsFive;
