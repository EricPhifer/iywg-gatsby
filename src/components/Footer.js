import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;
  height: 40rem;
  margin: 0;
  position: absolute;
  bottom: 0;
  background-color: rgba(100,100,100,1.0);
  color: var(--white);
  font-size: 1rem;
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    margin: 1rem 0;
    .icon {
      grid-column: 1 / span 1;
      justify-self: center;
    }
    .content {
      grid-column: 2 / span 2;
    }
  }
  .footerContainer {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .upperFooter {
    width: 100%;
    text-align: justify;
    display: inline-flex;
    justify-content: center;
  }
  .logoMission, .newsletter, .contact {
    width: 245px;
    height: 100%;
    padding-top: 1rem;
    margin: 0 6rem;
    .inline {
      align-items: center;
    }
  }

  .contact {
    h4 {
      padding-top: 3rem;
      padding-bottom: 5px;
      border-bottom: 2px solid var(--gold);
      font-size: 2rem;
    }
    p {
      margin: 4rem 0;
      text-align: left;
    }
    .contactContainer {
      width: 100%;
      padding: 1rem;
      display: flex;
      flex-flow: column nowrap;
      text-align: left;
      .contactcontent {
        font-size: 1.5rem;
        align-self: center;
      }
      a {
        color: var(--white);
        transition: all 0.25s ease-in-out;
        &:hover {
          color: var(--accent);
        }
      }
    }
    .social {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      .fb {
        width: 50px;
        height: 50px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 1rem;
        &:hover {
          box-shadow: 1px 1px 10px var(--accent);
        }
      }
      .li {
        width: 50px;
        height: 50px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 1rem;
        &:hover {
          box-shadow: 1px 1px 10px var(--accent);
        }
      }
    }
  }
  .lowerFooter {
    width: 100%;
    padding: 1rem 0;
    background-color: steelblue;
    position: absolute;
    bottom: 0;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      font-size: 1rem;
      li {
        padding-bottom: 0.5rem;
      }
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      span {
        padding: 0 1rem;
      }
    }
    .column {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    a {
      color: var(--white);
      cursor: pointer;
    }
    a:hover {
      border-bottom: 1px solid var(--white);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--white);
    }
  }
  @media only screen and (max-width: 950px) {
    height: 77rem;
    .upperFooter {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      .contactContainer {
        padding: 0;
      }
    }
    .lowerFooter {
      li {
        padding: 0 1rem;
        font-size: 0.9rem;
      }
      .column {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
`;

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    query {
      footer: allSanityFooter {
        nodes {
          id
          businessname
          dev
          devlink
          privterms {
            _key
            pagename
            pagelink
          }
        }
      }
    }
  `)
  
  const nodes = footer.nodes;
  return (
    <FooterStyles>
      {nodes.map((node) => (
      <div className="footerContainer" key={node.id}>
        <div className='lowerFooter'>
          <ul className="footerCredits column">
            <li>&copy; All Rights Reserved {node.businessname} {new Date().getFullYear()}</li>
            <li>
              <ul className="inline privTerms">
                <li>
                  <Link to={node.privterms[0].pagelink}>
                    {node.privterms[0].pagename}
                  </Link>
                </li>
                <span> | </span>
                <li>
                  <Link to={node.privterms[1].pagelink}>
                    {node.privterms[1].pagename}
                  </Link>
                </li>
              </ul>
            </li>
            <li> 
              <a href={node.devlink}  rel="noreferrer noopener">
                Built by {node.dev}
              </a>
            </li>
          </ul>
        </div>
      </div>
      ))}
    </FooterStyles>
  );
}
