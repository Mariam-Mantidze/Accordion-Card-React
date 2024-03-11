import { useState } from "react";

import "./App.css";
import FaqItem from "./components/faq-item/FaqItem";
import Imgcontainer from "./components/img-container/Img-container";
import { GlobalStyles } from "../Global";
import styled from "styled-components";

function App() {
  const [answer, setAnswer] = useState(null);
  console.log(answer);

  return (
    <div className="card-container">
      <GlobalStyles></GlobalStyles>
      <Main>
        <Title>FAQ</Title>
        <Imgcontainer />
        <FaqItem answer={answer} setAnswer={setAnswer} />
      </Main>
    </div>
  );
}

const Main = styled.main`
  background: #ffffff;
  box-shadow: 0px 50px 50px -20px #35127a7f;
  display: flex;
  /* gap: 38px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  padding: 0 24px 48px;
  width: 327px;
`;

const Title = styled.h1`
  align-self: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  color: rgba(30, 31, 54, 1);
  margin-top: 132px;
`;

export default App;
