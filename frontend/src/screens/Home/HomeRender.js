import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import {
  ContainerBody,
  ContainerHome,
  ContainerTable
} from './styles';

import { columnEmployees } from '../../utils/columnsTables';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function HomeRender({ onClickExtract, onClickEmployees, username, employees, breadcrumbs }){
  return (
    <ContainerHome>
      <Header 
        onClickExtract={onClickExtract}
        onClickEmployees={onClickEmployees}
        username={username} />
      <ContainerBody>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <ContainerTable>
          <Table 
            data={employees}
            columns={columnEmployees}/>
        </ContainerTable>
      </ContainerBody>
    </ContainerHome>
  );
}

HomeRender.propTypes = {
  onClickExtract: PropTypes.func.isRequired,
  onClickEmployees: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
  breadcrumbs: PropTypes.array.isRequired
};