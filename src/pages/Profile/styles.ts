import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;

  > header {
    height: 204px;
    background: ${colors.color1};

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: ${colors.color3};
        width: 28px;
        height: 28px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -235px auto 0;

  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin: 14vh 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
      font-weight: 400;
      text-align: left;
      color: ${colors.color5};
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  align-self: center;
  position: relative;

  img {
    width: 186px;
    height: 186px;
    object-fit: cover;
    border-radius: 50%;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    background: ${colors.color1};
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: all, 0.2s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${colors.color3};
    }

    &:hover {
      background: ${shade(0.2, colors.color1)};
    }
  }
`;
