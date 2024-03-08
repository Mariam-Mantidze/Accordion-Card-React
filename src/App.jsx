import { useState } from "react";

import "./App.css";
import FaqItem from "./components/faq-item/FaqItem";

function App() {
  const [answer, setAnswer] = useState(false);

  return (
    <div className="card-container">
      <FaqItem answer={answer} setAnswer={setAnswer} />
    </div>
  );
}

export default App;
