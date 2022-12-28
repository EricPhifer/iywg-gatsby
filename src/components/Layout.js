import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 40rem;
  @media only screen and (max-width: 950px) {
    padding-bottom: 77rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav />
        {children}
        <Footer />
      </SiteStyles>
    </>
  );
}
