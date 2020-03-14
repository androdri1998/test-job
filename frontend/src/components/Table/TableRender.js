import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getValueTable } from "../../services/filters";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableRender({ columns, data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns && columns.map((column, index) => 
              (<TableCell key={index} align={column.align}>{column.name}</TableCell>)
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((item, index) => {
            return (
              <TableRow key={index}>
              {Object.keys(item).map(key => {
                  const searchColumn = columns.filter(column => column.key === key);
                  return searchColumn.length > 0
                    ? (<TableCell key={key} align={searchColumn[0].align}>{getValueTable({value: item[key], type: searchColumn[0].type})}</TableCell>)
                    : null;
              })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(TableRender);