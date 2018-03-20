import React from 'react';
import { For } from 'react-extras';
import { arrayOf, object } from 'prop-types';
import Box from '../../../components/Box';
import Link from '../../../components/Link';
import { theme } from '../../../utils/styles';

const Item = Box.withComponent(Link).extend`
  color: ${theme.colors.gallery};
  width: 23.5%;
  background-color: ${theme.colors.lynch};
  border-radius: ${theme.border.radius};
  height: 100px;
  padding: 20px;
  font-weight: ${theme.font.bold};
  text-decoration: none;
`;

const List = ({ data }) => (
  <Box displayType="flex" justifyContent="space-between">
    <For of={data} render={({ id, name }) => (
      <Item
        key={id}
        displayType="flex"
        justifyContent="center"
        alignItems="center"
        to={`/hero/${id}`}
      >
        { name }
      </Item>
    )} />
  </Box>
)

List.propTypes = {
  data: arrayOf(object),
};

export default List;