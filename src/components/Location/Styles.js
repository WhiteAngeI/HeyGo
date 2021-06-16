import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: lightslategrey;
`;

export const MapSizer = styled.div`
  width:50vw;
  height:100vh;
  position: fixed;
  right: 0;
  top: 0;
  margin: 0;
  @media (max-width: 1000px) {
    width: 100vw;
    height: 50vh;
    position: relative;
    left: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
  }
`;

export const Li = styled.li `
  position: relative;
  width: 50%;
  padding: 5px;
  top: 33%;
  left: 12%;
  color: rgba(244, 145, 14, 0.80);
  list-style-type: none;
  font-size: 2rem;
  font-family: 'Helvetica Neue', sans-serif;
  text-shadow: 1px 0.5px #282c34;
  @media (max-width: 1000px) {
    top:0;
    left: 0;
    width: content-box;
  }
`;
