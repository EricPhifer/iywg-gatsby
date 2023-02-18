import { createGlobalStyle } from 'styled-components';
import globalbgdesktop from '../images/globalbgdesktop.gif';
import globalbgportrait from '../images/globalbgportrait.gif';
import globalbgtablet from '../images/globalbgtablet.gif';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset by Mirkov Sasa https://github.com/mirkovsasa/CSS-Reset/blob/main/Reset.css */

  /* Resetting defaults */
  * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      box-sizing: border-box;
  }

  /* Setting border box model for easier sizing of elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Setting font size to make 10px = 1rem for easier scaling and manipulation of all elements in rem's */
  html {
      font-size: 62.5%;
  }

  /* Setting default distance between the lines */
  body {
      line-height: 1;
  }

  /* inheriting text for consistency */
  input, button, textarea, select {
    font: inherit;
  }

  /* Removing default styles for lists */    
  ol, ul {
      list-style: none;
  }

  /* Removing defaults styles for quotes */    
  blockquote, q {
      quotes: none;
  }
      
  blockquote:before, blockquote:after,
      q:before, q:after {
      content: '';
      content: none;
  }
      
  /* Removing default outline styles for elements */
  :focus {
      outline: 0;
  }
      
  /* Removing table defaults */
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  /* Changing default img properties for easier workflow */
  img, picture {
      max-width: 100%;
      display: block;
  }

  // Global Styles
  :root {
    --black: #232129;
    --white: #fff;
    --gray: #333333;
    --red: #710A0C;
    --call: #C0F5FA;
    --green: #08890B;
    --blue: steelblue;
    --lightblue: lightsteelblue;
  }
  html, body {
    min-height: 100%;
    max-width: 100vw;
    margin: 0;
  }
  html {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top left;
    background-attachment: fixed;
    overflow-x: hidden;
    @media only screen and (min-width: 1220px) {
      background-image: url(${globalbgdesktop})
    }
    @media only screen and (max-width: 1219px) {
      background-image: url(${globalbgportrait})
    }
    @media only screen and (max-width: 900px) {
      background-image: url(${globalbgtablet})
    }
    @media only screen and (max-width: 500px) {
      background-image: url(${globalbgtablet})
    }
  }
  body {
    position: relative;
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
