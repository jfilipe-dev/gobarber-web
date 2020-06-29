import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${colors.color3};
  border-radius: 5px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${colors.color3};
  color: ${colors.color4};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      color: ${colors.error};
      border-color: ${colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${colors.color2};
      color: ${colors.color2};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${colors.color2};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${colors.color5};

    &::placeholder {
      color: ${colors.color4};
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
    color: ${colors.error};
  }

  span {
    background: ${colors.error};
    color: ${colors.color3};

    &::before {
      border-color: ${colors.error} transparent;
    }
  }
`;
