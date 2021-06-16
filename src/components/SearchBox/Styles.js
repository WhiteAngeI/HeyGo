import styled from "styled-components";

export const SearchBoxStyle = styled.form`
      text-align: center;
      position: relative;
      padding-top: 40vh;
    `

export const Input = styled.input`
      -webkit-writing-mode: horizontal-tb !important;
      text-rendering: auto;
      color: -internal-light-dark(black, white);
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0;
      width: 33vw;
      height: 3vh;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      appearance: auto;
      background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
      -webkit-rtl-ordering: logical;
      cursor: text;
      margin: 0;
      font: 400 1.2rem Arial;
      padding: 1px 2px;
      border-width: 2px;
      border-style: inset;
      border-radius: 8px;
      border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    
      @media (min-width: 768px) {
        width: 25vw;
      }
    `;

export const Box = styled.div`
  display: ${props => props.visibility};
  width: 18.75rem;
  border: 15px solid lightslategrey;
  border-radius: 4px;
  background: rgba(179, 179, 179, 0.9);
  padding: 3.125rem;
  margin: 0.8rem auto;
  list-style-type: none;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 1px;
`

export const Li = styled.li`
  &:hover {
    transform: scale(1.5);
    text-shadow: 1px 0.5px #282c34;
  }
`
