import React, { useRef } from "react";
import * as I from "../../icons";
import "./index.css";

export default function Index({ setQuestion }) {
  const inputRef = useRef();
  return (
    <div className="text-field">
      <input ref={inputRef}></input>
      <I.SendIcon
        onClick={() => {
          setQuestion(inputRef.current.value);
        }}
      />
    </div>
  );
}
