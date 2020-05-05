import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    width: 180px;
    padding: 8px;
    border-radius: 4px;
    font-weight: 500;
    opacity: 0;
    transition: all 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
