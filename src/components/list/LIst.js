import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  width: 100hv;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: lightblue;
  }
`;
