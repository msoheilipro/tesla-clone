import React from 'react';
import styled from 'styled-components';


const Button = ({ name, onClick, secondary }) => {
  return (
    <ButtonForm onClick={onClick} secondary={secondary}>
      {name}
    </ButtonForm>
  );
};

export default Button;

const ButtonForm = styled.button`
  width: 100%;
  padding: 10px 40px;
  border: 3px solid var(--primary-color);
  border-radius: 50px;
  font-weight: 200;
  font-size: 12px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border: 3px solid
    ${(props) =>
      props.secondary ? 'var(--secondry-color)' : 'var(--primary-color)'};
  color: ${(props) => (props.secondary ? 'var(--grey-color)' : '#FFFFFF')};
  background-color: ${(props) =>
    props.secondary ? '#FFFFFF' : 'var(--primary-color)'};

  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 3px solid
      ${(props) =>
        props.secondary
          ? 'var(--secondry-color)'
          : 'var(--primar-hover-color)'};
    color: white;
    background-color: ${(props) =>
      props.secondary ? 'var(--secondry-color)' : 'var(--primar-hover-color)'};
  }
`;
