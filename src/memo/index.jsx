import React, { useState } from "react";
import Count from "./components/count";
import IsFive from "./components/isFive";

export const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>Memo</h1>
      <div style={{ marginTop: "10px", display: "flex", columnGap: "15px" }}>
        <button onClick={() => setCount1(count1 + 1)}>Plus</button>
        <Count id={1} count={count1} />
      </div>
      <div style={{ marginTop: "10px", display: "flex", columnGap: "15px" }}>
        <button onClick={() => setCount2(count2 + 1)}>Plus</button>
        <Count id={2} count={count2} />
				<IsFive count={count2}/>
      </div>
    </div>
  );
};

export default Memo;
