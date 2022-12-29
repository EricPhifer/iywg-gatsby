import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 15rem;
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -2.2em;
  padding-left: 2.2em;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 2px 2px 5px var(--black);

`

const closed = css`
  width: 0;
  background: var(--white);
  cursor: pointer;
  margin-left: -2.7em;
  padding-left: 3em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1rem;
    transition: 100ms;
    border-radius: 10px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`