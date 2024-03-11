import { useState } from "react";

import "./App.css";
import FaqItem from "./components/faq-item/FaqItem";
import Imgcontainer from "./components/img-container/Img-container";
import { GlobalStyles } from "../Global";
import styled from "styled-components";
import IllustrationDesktop from "/images/illustration-woman-online-desktop.svg";
import ShadowDesktop from "/images/bg-pattern-desktop.svg";

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

  @media (min-width: 800px) {
    width: 920px;
    padding: 65px 95px 83px 475px;
    align-items: flex-start;
    background-image: url(${IllustrationDesktop}), url(${ShadowDesktop});
    background-repeat: no-repeat, no-repeat;
    /* background-size: 500px, 500px; */
    background-position: top 70px left -81px, top -293px left -576px;
  }
`;

const Title = styled.h1`
  align-self: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  color: rgba(30, 31, 54, 1);
  margin-top: 132px;

  @media (min-width: 800px) {
    margin-top: 0;
    align-self: flex-start;
  }
`;

export default App;
