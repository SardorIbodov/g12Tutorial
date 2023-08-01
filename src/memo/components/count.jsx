import React from "react";

export const Count = React.memo((props) => {
	console.log(`${props.id} ishladi`);
  return <span>{props.count}</span>;
});

export default Count;