import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

html {
  /* distances */
  --d1: 11px;
  --d2: 18px;
  --d3: 29px;
  --d4: 47px;
  --d5: 76px;

  /* colors */
  --accent: #5988FF;
  --bg: #FEFEFE;
  --g10: #101727;
  --g7: #58596B;
  --g5: #686868;
  --g3: #9D9D9D;
  --g2: #EBEBEB;
  --dark: #1A1A1A;
  --red: #D74040;
}

body {
  margin: 0;
  padding: 0;

  font-family: "Montserrat";

  background-color: var(--g2);

  min-height: 100vh;

  -moz-user-select: none; -khtml-user-select: none; user-select: none;
}

.App {
  z-index: 100;
  position: relative;
  pointer-events: none;
}

body::-webkit-scrollbar {
  width: 0;
}

h1, h2, h3 {
  font-family: 'Montserrat';
  font-style: normal;
  margin: 0;
  padding: 0;
}

h1 {
  font-weight: 500;
  font-size: var(--d3);
}

h2 {
  font-weight: 400;
  font-size: var(--d2);
}

h3 {
  font-weight: 400;
  font-size: var(--d1);
}

`;

export default GlobalStyles;
