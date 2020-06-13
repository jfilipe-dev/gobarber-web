import styled from 'styled-components';
import { shade } from 'polished';

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

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: ${colors.color2};
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1.3px;
      height: 12px;
      background: ${colors.color2};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: ${colors.color4};
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: ${colors.color3};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;
      background: ${colors.color2};
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${colors.color1};
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: ${colors.color4};

      svg {
        color: ${colors.color2};
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: ${colors.color4};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${colors.color4};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: ${colors.color4};
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${colors.color4};
    width: 70px;

    svg {
      color: ${colors.color2};
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: ${colors.color3};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${colors.color1};
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: ${colors.color3};
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${colors.background};
    border-radius: 10px;
    color: ${colors.color1};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, `${colors.color4}`)};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: ${colors.color4} !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${colors.color2} !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
