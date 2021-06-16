import React from "react";
import styled from 'styled-components'; // It's my first time with styled components
import img from '../../images/background.jpg'; //I Love New York

const layout = () => {
   return (
       <Layout />
   )
}

export default layout;

const Layout = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fill;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -2;
`;