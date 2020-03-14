import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import {
  ContainerBody,
  ContainerExtract,
  ContainerTable
} from './styles';

import { columnsTransactions } from '../../utils/columnsTables';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function ExtractRender({ username, transactions, breadcrumbs }){
  return (
    <ContainerExtract>
      <Header
        username={username} />
      <ContainerBody>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <ContainerTable>
          <Table 
            data={transactions}
            columns={columnsTransactions}/>
        </ContainerTable>
        <Typography align="right" variant="h4">Saldo: R$ {transactions.reduce((accumulator, currentValue) => (accumulator + currentValue.operation_value), 0)}</Typography>
      </ContainerBody>
    </ContainerExtract>
  );
}

ExtractRender.propTypes = {
  username: PropTypes.string.isRequired,
  transactions: PropTypes.array.isRequired,
  breadcrumbs: PropTypes.array.isRequired
};