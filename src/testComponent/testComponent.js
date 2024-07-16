import React from "react";
import { useState } from "react";
function LikeButton(props) {
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
  });

  return (
    <div>
      <div>{count.count1}</div>
      <button
        id="button1"
        onClick={() => {
          const button = { ...count };
          button.count1++;
          setCount(button);
        }}
      >
        버튼이다.
      </button>

      <div>{count.count2}</div>
      <button
        id="button2"
        onClick={() => {
          const button = { ...count };
          button.count2++;
          setCount(button);
        }}
      >
        버튼이다.
      </button>
    </div>
  );
}
export default LikeButton;
