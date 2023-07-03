import React from "react";
import "./index.css";
import ChatItem from "../ChatItem";

export default function index() {
  return (
    <div className="main">
      <ChatItem
        imageLink={
          "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201608/04/htm_2016080484837486184.jpg"
        }
        text={"dd"}
      />
      <ChatItem
        imageLink={
          "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201608/04/htm_2016080484837486184.jpg"
        }
        text={"dd"}
      />
    </div>
  );
}
