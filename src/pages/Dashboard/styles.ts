import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: ${colors.color3};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    color: ${colors.color4};

    svg {
      color: ${colors.color4};
      width: 25px;
      height: 25px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: ${colors.color1};
    }

    strong {
      color: ${colors.color2};
    }
  }
`;
