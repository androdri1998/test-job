import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import {
  ContainerBody,
  ContainerEmployees,
  ContainerTable
} from './styles';

import { columnsEmployees } from '../../utils/columnsTables';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function EmployeesRender({ username, employees, breadcrumbs }){
  return (
    <ContainerEmployees>
      <Header 
        username={username} />
      <ContainerBody>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <ContainerTable>
          <Table 
            data={employees}
            columns={columnsEmployees}/>
        </ContainerTable>
      </ContainerBody>
    </ContainerEmployees>
  );
}

EmployeesRender.propTypes = {
  username: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
  breadcrumbs: PropTypes.array.isRequired
};