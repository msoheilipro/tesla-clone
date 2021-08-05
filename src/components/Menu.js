import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <CloseWrapper>
        <CustomClose onClick={() => setIsMenuOpen(false)} />
      </CloseWrapper>

      <MenuItem title='existing inventory' />
      <MenuItem title='used inventory' />
      <MenuItem title='trade-in' />
      <MenuItem title='cybertruck' />
      <MenuItem title='roadster' />
      <MenuItem title='semi' />
      <MenuItem title='charging' />
      <MenuItem title='powerwall' />
      <MenuItem title='commercial solar' />
      <MenuItem title='test drive' />
      <MenuItem title='find us' />
      <MenuItem title='support' />
      <MenuItem title='united states' />
      <Link to='/login'>Tesla Account</Link>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 25px;
  padding-top: 15px;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 300px;
  transform: ${(props) =>
    props.isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  > a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
