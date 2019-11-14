import React from 'react';
import styled, { css } from 'styled-components';

const SpinnerContainer = styled.div`
  ${props =>
    props.isBig &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      font-size: 50px;
      width: 50px;
      height: 50px;
    `}
`;

const SpinnerStyled = styled.div`
  font-size: 5px;
  margin: ${props => props.center && 'auto'};
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: ${props => (props.color ? props.color : '#dcdcdc')};
  background: ${props =>
    props.color
      ? css`linear-gradient(
    to right,
    ${props.color} 10%,
    rgba(255, 255, 255, 0) 42%
  )`
      : css`linear-gradient(
    to right,
    rgb(220, 220, 220) 10%,
    rgba(255, 255, 255, 0) 42%
  )`};
  position: relative;
  animation: ${props =>
    props.speed
      ? css`spinner ${props.speed}s infinite linear`
      : css`spinner 1s infinite linear`};
  transform: translateZ(0);
  &::before {
    width: 50%;
    height: 50%;
    background: ${props => (props.color ? props.color : '#dcdcdc')};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &::after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = ({ isBig, colorHex, speedInSec, centered }) => {
  return (
    <SpinnerContainer isBig={isBig}>
      <SpinnerStyled
        color={colorHex}
        speed={speedInSec}
        center={centered}></SpinnerStyled>
    </SpinnerContainer>
  );
};
