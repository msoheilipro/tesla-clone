import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import TeslaCar from './TeslaCar';
import { useDispatch } from 'react-redux';


const TeslaAccount = ({ isMenuOpen, setIsMenuOpen }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <TeslaAccountHeader>
        <TeslaAccountLogo>
          <Link to='/'>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='Tesla LOGO'
            />
          </Link>
        </TeslaAccountLogo>

        <TeslaAccountLinks>
          <Link to='/teslaaccount'>Model S</Link>
          <Link to='/teslaaccount'>Model 3</Link>
          <Link to='/teslaaccount'>Model X</Link>
          <Link to='/teslaaccount'>Model Y</Link>
          <Link to='/teslaaccount'>Solar Panels</Link>
        </TeslaAccountLinks>

        <TeslaAccountRight>
          <span>
            <Link to='/teslaaccount'>Shop</Link>
            <Link to='/teslaaccount'>Tesla Account</Link>
            <Link onClick={logOutOfApp}>Log out</Link>
          </span>
          <TeslaAccountMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </TeslaAccountMenu>
        </TeslaAccountRight>
      </TeslaAccountHeader>

      <TeslaAccountInfo>
        <TeslaAccoutnPerson>
          <h4>{user?.displayName + "'s Tesla"}</h4>
        </TeslaAccoutnPerson>

        <TeslaAccountInfoRight>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logOutOfApp}>Sign out</Link>
        </TeslaAccountInfoRight>
      </TeslaAccountInfo>

      <TeslaAccountCar>
        <TeslaCar
          title='Model S'
          backgroundImg='model-s-account.jpg'
          leftBtnText='Order'
          rightBtnText='Test Drive'
        />

        <TeslaCar
          title='Model X'
          backgroundImg='model-x-account.jpg'
          leftBtnText='Order'
        />
      </TeslaAccountCar>
    </Container>
  );
};

export default TeslaAccount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeslaAccountHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222222;
  color: white;
  height: 52px;
  padding: 25px;
`;

const TeslaAccountLogo = styled.div`
  > a {
    img {
      flex: 1;
      width: 90px;
      margin-right: 200px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
  }
`;

const TeslaAccountLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  > a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const TeslaAccountRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  span {
    display: flex;
    gap: 20px;
    align-items: center;
    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 15px;
      position: relative;
      z-index: 0;
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const TeslaAccountMenu = styled.div`
  .MuiSvgIcon-root {
    padding-top: 2px;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
`;

const TeslaAccountInfo = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 140px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 52px;
  }
`;

const TeslaAccoutnPerson = styled.div`
  > h4 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: x-large;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TeslaAccountInfoRight = styled.div`
  display: flex;
  gap: 20px;
  > a {
    text-decoration: none;
    color: var(--grey-color);
    font-size: medium;
    transition: all 0.2s;
    text-transform: capitalize;
  }
  &:hover {
    color: black;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    margin: 0 20px;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
    a {
      font-size: 14px;
      border-bottom: 1px solid var(--secondry-color);
    }
  }
`;

const TeslaAccountCar = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  padding-bottom: 40px;
`;
