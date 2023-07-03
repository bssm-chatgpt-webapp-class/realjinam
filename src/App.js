import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextField from "./components/TextField";
import "./reset.css";

function App() {
  const [question, setQuestion] = useState("");
  return (
    <div>
      <Header />
      <Main question={question} />
      <TextField setQuestion={setQuestion} />
    </div>
  );
}

export default App;
