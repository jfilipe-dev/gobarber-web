import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div``;

export const Header = styled.div`
  background: ${colors.color1};
  padding: 28px 0;

  img {
    width: 148px;
  }

  div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      svg {
        margin-left: 8px;
      }

      background: ${colors.color2};
      height: 56px;
      border-radius: 5px;
      border: 0;
      padding: 0 16px;
      color: ${colors.color3};
      font-weight: 500;
      margin-top: 16px;
      transition: all 0.2s;

      &:hover {
        background: ${shade(0.2, colors.color2)};
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  a {
    color: ${colors.color2};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: all 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, colors.color2)};
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 14vh 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
      font-weight: 400;
      color: ${colors.color5};
    }

    a {
      color: ${colors.color5};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, colors.color5)};
      }
    }
  }
`;
