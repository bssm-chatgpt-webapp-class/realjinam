import React from "react";
import "./index.css";
import ChatItem from "../ChatItem";
import { chatgptResponse } from "../../fixtures";

export default function index({ question }) {
  return (
    <div className="main">
      <ChatItem
        imageLink={
          "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201608/04/htm_2016080484837486184.jpg"
        }
        text={question}
      />
      <ChatItem
        imageLink={
          "https://cdn.discordapp.com/attachments/1123602798764883968/1125256008315437096/gpt.png"
        }
        text={chatgptResponse}
      />
    </div>
  );
}
