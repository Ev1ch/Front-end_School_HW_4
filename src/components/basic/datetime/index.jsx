import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { basicStyles, lightTheme, darkTheme } from 'styles';

const color = theme('mode', {
  dark: darkTheme.colors.basic,
  light: lightTheme.colors.secondary,
});

const StyledDatetime = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: ${basicStyles.gutter / 2}px;
  margin-bottom: ${basicStyles.gutter / 2}px;
  gap: 5px;
  font-size: 12px;
  color: ${color};
`;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Datetime = ({
  date: { month, day, year },
  time: { hours, minutes },
  className,
}) => {
  return (
    <StyledDatetime className={className}>
      <span>
        <FontAwesomeIcon icon={faCalendar} /> {months[month - 1]}, {day}, {year}
      </span>
      <span> | </span>
      <span>
        <FontAwesomeIcon icon={faClock} /> {hours <= 9 ? `0${hours}` : hours}:
        {minutes <= 9 ? `0${minutes}` : minutes}
      </span>
    </StyledDatetime>
  );
};

export default Datetime;
