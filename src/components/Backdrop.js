import React from 'react';
import styled from 'styled-components';


const Backdrop = ({ isMenuOpen }) => {
  return <Container isMenuOpen={isMenuOpen}></Container>;
};

export default Backdrop;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.2s;
`;
