import React from 'react';
import styled from 'styled-components';


const MenuItem = ({ title }) => {
  return (
    <Container>
      <MenuItems>
        <h4>{title}</h4>
      </MenuItems>
    </Container>
  );
};

export default MenuItem;

const Container = styled.div``;

const MenuItems = styled.div`
  border-bottom: 1px solid #d0d1d2;
  text-align: left;
  cursor: pointer;

  > h4 {
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    cursor: pointer;
  }
`;
