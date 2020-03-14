import React from 'react';
import PropTypes from 'prop-types';
import TableRender from './TableRender';

export default function Table({ columns, data }){
  return(
    <TableRender 
      columns={columns}
      data={data} />
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};