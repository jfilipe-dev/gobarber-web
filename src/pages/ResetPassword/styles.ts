import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  background: ${colors.color1};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
      color: ${colors.color3};
    }

    a {
      color: ${colors.color1};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, colors.color1)};
      }
    }
  }
`;
