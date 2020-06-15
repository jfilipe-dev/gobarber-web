import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface LogoProps {
  size?: 'small' | 'large';
}

export const Logo = styled.div<LogoProps>`
  ${({ size }) =>
    size === 'large'
      ? css`
          width: 180px;
          div {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          h1 {
            color: ${colors.color3};
          }
          img {
            width: 52px;
            margin-right: 8px;
          }
        `
      : css`
          width: 108px;
          div {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          h1 {
            font-size: 18px;
            color: ${colors.color3};
          }
          img {
            width: 36px;
            margin-right: 8px;
          }
        `}
`;
