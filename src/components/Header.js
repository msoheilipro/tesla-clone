import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Container>
      <HeaderLogo>
        <Link to='/'>
          <img
            src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
            alt='Tesla LOGO'
          />
        </Link>
      </HeaderLogo>
      <HeaderLinks>
        <Link to='/'>Model S</Link>
        <Link to='/'>Model 3</Link>
        <Link to='/'>Model X</Link>
        <Link to='/'>Model Y</Link>
        <Link to='/'>Solar Roof</Link>
        <Link to='/'>Solar Panels</Link>
      </HeaderLinks>
      <HeaderRight>
        <HeaderRightText isMenuOpen={isMenuOpen}>
          <Link to='/'>Shop</Link>
          <Link to='/login'>Tesla Account</Link>
        </HeaderRightText>

        <HeaderMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </HeaderMenu>
      </HeaderRight>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  padding-top: 15px;
`;

const HeaderLogo = styled.div`
  > a {
    img {
      object-fit: contain;
      flex: 1;
      width: 90px;
      margin-right: 100px;
    }
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 15px;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    font-size: 15px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  > a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    z-index: 0;
  }
`;

const HeaderRightText = styled(HeaderRight)`
  visibility: ${(props) => (props.isMenuOpen ? 'hidden' : 'visible')};

  @media (max-width: 1201px) {
    display: none;
  }
`;

const HeaderMenu = styled.div`
  .MuiSvgIcon-root {
    position: relative;
    z-index: 3;
    cursor: pointer;
  }
`;
