import React from 'react';
import styled from 'styled-components';


const TeslaCar = ({ title, backgroundImg, leftBtnText, rightBtnText }) => {
  return (
    <Container>
      <Wrap bgImage={backgroundImg}>
        <h2>{title}</h2>

        <ButtonGroup>
          <LeftButton rightBtnText={rightBtnText}>{leftBtnText}</LeftButton>

          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>

        <p>
          <span>Request a Call </span>
          to speak with a product specialist, valueyour trade-in or apply for
          leasing
        </p>
      </Wrap>
    </Container>
  );
};

export default TeslaCar;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Wrap = styled.div`
  height: 100%;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > p {
    max-width: 350px;
    text-align: center;
    font-size: smaller;
    line-height: 1.5;
    font-weight: 500;
    color: #393c41;
    span {
      color: var(--primary-color);
      cursor: pointer;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: var(--primary-color);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;

  &:hover {
    border: 3px solid var(--primar-hover-color);
    background-color: var(--primar-hover-color);

    @media (max-width: 768px) {
      margin: 8px;
    }
  }
`;

const RightButton = styled(LeftButton)`
  color: var(--grey-color);
  background-color: #ffffff;
  border: 3px solid var(--secondry-color);

  &:hover {
    border: 3px solid var(--secondry-color);
    color: white;
    background-color: var(--secondry-color);
  }
`;
