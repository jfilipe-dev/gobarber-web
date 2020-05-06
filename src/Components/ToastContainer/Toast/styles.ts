import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import colors from '../../../styles/colors';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    border-left: 6px solid ${colors.info};
    color: ${colors.info};
  `,
  success: css`
    border-left: 6px solid ${colors.success};
    color: ${colors.success};
  `,
  error: css`
    border-left: 6px solid ${colors.error};
    color: ${colors.error};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  background: ${colors.color1};

  display: flex;
  align-items: center;
  justify-content: space-around;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  div {
    flex: 1;
    margin: 0 16px;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
      color: ${colors.color4};
    }
  }

  button {
    margin-top: 4px;
    border: 0;
    background: transparent;
    color: ${colors.color4};
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
