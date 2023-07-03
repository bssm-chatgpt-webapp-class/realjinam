import React from "react";
import "./index.css";

export default function index({ imageLink, text }) {
  return (
    <div className="question">
      <img className="question-profile" src={imageLink} />
      <div>{text}</div>
    </div>
  );
}
