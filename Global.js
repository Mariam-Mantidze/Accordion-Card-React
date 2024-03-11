import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"); 


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: "Kumbh Sans", sans-serif;
  background: linear-gradient(180deg, #b068e9 0%, #6463e7 100%);
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  list-style: none;
} 

`;
