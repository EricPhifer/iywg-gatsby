import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  width: 100%;
  height: 150px;
  position: absolute;
  top: 0;
  z-index: 7;
  .full {
    width: 100vw;
    height: 100%;
    position: relative;
    justify-content: end;
    align-items: center;
    img {
      position: absolute;
      left: 2.5rem;
      top: 0.5rem;
    }
  }
  .linkContainer {
    width: 70rem;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav {
    width: 100%;
    ul {
      width: 100%;
      justify-content: space-evenly;
      list-style-type: none;
      padding: 0;
      a {
        padding: 1.3rem;
        font-size: 1.75rem;
        color: var(--red);
        font-weight: bold;
        cursor: pointer;
        transition: all 0.25s ease;
        &:hover {
          color: var(--lightred);
        }
      }
      a[aria-current='page'] {
        border-bottom: 1.5px solid var(--lightred);
      }
    }
  }
  .navBG {
    z-index: 1;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    padding: 0;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .navBG img {
    width: 150px;
  }
  #dropToggle input {
    width: 178px;
    height: 35px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  .inputFlex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #dropmenu {
    background-color: var(--red);
    position: absolute;
    top: 150px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(0%, -135%);
    transition: all 0.5s ease;
    overflow-y: auto;
    opacity: 0;
  }
  #dropmenu li {
    transition-delay: 2s;
  }
  #dropdown li:hover {
    border-bottom: 1.5px solid var(--white);
  }
  #dropmenu button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    text-shadow: 1px 1px 5px #c2c2c2;
  }
  #dropToggle input:checked ~ .dropContainer {
    opacity: 1;
    transform: none;
    svg {
      transform: rotate(180deg);
    }
  }

  @media only screen and (max-width: 1080px) {
    .navBG {
      z-index: 0;
    }
  }
  @media only screen and (min-height: 376px) and (max-height: 600px) {
    background-color: rgba(215, 238, 246, 0.5);
  }
  @media only screen and (max-height: 375px) {
    height: 75px;
    background-color: rgba(215, 238, 246, 0.5);
    .navBG {
      img {
        width: 90px;
      }
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 975px) {
    display: none;
  }
`;

export default function Nav() {
  const { navitems } = useStaticQuery(graphql`
    query {
      navitems: allSanityNavigation {
        nodes {
          id
          title
          mainalt
          mobilealt
        }
      }
    }
  `)

const nodes = navitems.nodes;
  return (
    <>
      <Navigation>
        {nodes.map((node) => (
          <div className="full navBG flex" key={node.id}>
            <Link to='/'>
              Home
            </Link>
          </div>
        ))}
      </Navigation>
    </>
  );
}
