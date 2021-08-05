import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';


const Section = ({
  title,
  description,
  spanDescription,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  showArrow,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description} <span>{spanDescription}</span>
          </p>
        </ItemText>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton rightBtnText={rightBtnText}>{leftBtnText}</LeftButton>

            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {showArrow && <KeyboardArrowDownIcon />}
      </Button>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 5vh;
  text-align: center;
  > h1 {
    color: var(--grey-color);
    font-size: 40px;
    font-weight: 550;
  }
  > p {
    line-height: 2;
    color: #5c5e62;
    font-size: 14px;
    position: relative;
    letter-spacing: 0.5px;
    z-index: 1;
    > span {
      padding-bottom: 2px;
      color: #5c5e62;
      border-bottom: 1px solid black;

      &:hover {
        color: black;
        cursor: pointer;
        border-bottom: 2px solid black;
      }
    }
  }
`;

const Button = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .MuiSvgIcon-root {
    height: 50px;
    width: 50px;
    overflow-x: hidden;
    animation: animmateDown infinite 1.5s;
  }
`;

const ButtonGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 1);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: ${(props) => (props.rightBtnText ? '0.7' : '1')};
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
