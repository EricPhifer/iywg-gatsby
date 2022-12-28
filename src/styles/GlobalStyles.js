import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --white: #fff;
    --gray: #333333;
    --gold: #D6A616;
    --accent: #B8B8D1;
    --red: #710A0C;
    --call: #C0F5FA;
    --lightred: #E26D5C;
    --lightgreen: #90EE90;
    --green: #08890B;
  }
  html, body {
    min-height: 100%;
    max-width: 100vw;
    margin: 0;
  }
  html {
    background-color: var(--white);
    font-size: 10px;
    overflow-x: hidden;
  }
  body {
    position: relative;
  }
  .buttonesque {
    width: 200px;
    padding: 10px 10px;
    color: var(--red);
    font-size: 2rem;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid var(--red);
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: var(--red);
      color: var(--white);
    }
  }
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-shadow: 3px 3px 10px var(--black);
    background-color: var(--lightgreen);
    color: var(--gray);
    font-weight: bold;
    font-size: 2.5rem;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: var(--green);
      color: var(--white);
    }
    @media only screen and (max-height: 400px) {
      padding: 1rem;
      font-size: 2rem;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } 

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--lightred) #fff;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--lightred) ;
    border-radius: 6px;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
