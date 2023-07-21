import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  overflow: hidden;
  padding: 0;
  text-decoration: none;
`;

export const Item = styled.li`
  padding: 16px 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;

  color: #414141;
  font-weight: 500;

  &:hover {
    color: black;
  }
`;
