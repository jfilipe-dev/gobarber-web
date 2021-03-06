import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 100%;
  margin-top: 16px;
  transition: all 0.2s;

  &:hover {
    background: ${shade(0.2, colors.color2)};
  }
`;
