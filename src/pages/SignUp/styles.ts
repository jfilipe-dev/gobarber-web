import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';
import SignUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 14vh 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
      font-weight: 400;
    }

    > a {
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

  > a {
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

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
