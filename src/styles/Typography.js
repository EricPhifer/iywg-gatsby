import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif; 
    color: #000;
  }

  body {
    font-size: 1.5rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: var(--red);
    &:hover {
      color: var(--lightred);
    }
  }
`;

export default Typography;
