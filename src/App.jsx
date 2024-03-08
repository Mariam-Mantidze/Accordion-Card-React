import { useState } from "react";

import "./App.css";
import FaqItem from "./components/faq-item/FaqItem";
import Imgcontainer from "./components/img-container/Img-container";

function App() {
  const [answer, setAnswer] = useState(false);

  return (
    <div className="card-container">
      <h1>FAQ</h1>
      <Imgcontainer />
      <FaqItem answer={answer} setAnswer={setAnswer} />
    </div>
  );
}

export default App;
