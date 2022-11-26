import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');

:root{
  --background:  #362946;
  --purple: #7025CF;

  --white: #FFFFFF;
  --white-100: #F0F0F0;
  --black: #282828;
  --gray: #6E6E6E;
  --red: #F60000;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
    font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
  -webkit-font-smoothing: antialiased;
  max-width: 375px;
  width: 375px;
  box-sizing: border-box;
  overflow-x: hidden;
  background: var(--background);
}

body, input, textarea, button, span {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: transparent;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: 400;
 font-family: 'Montserrat', sans-serif;
}

p, label {
 font-family: 'Montserrat', sans-serif;
 color: var(--white);
 font-weight: 700;
}

button{
  cursor: pointer;
  outline: none;
  border: none;
 font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
  text-align: center;
}


`