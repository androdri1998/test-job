import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routesContants from '../../utils/routes.contants';
import HeaderRender from './HeaderRender';

function Header({ username, history }){
  function onClickExtract() {
    history.push(routesContants.EXTRACT);
  }

  function onClickEmployees() {
    history.push(routesContants.EMPLOYEES)
  }
  
  return(
    <HeaderRender 
      onClickExtract={onClickExtract}
      onClickEmployees={onClickEmployees}
      username={username}/>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired
};

export default React.memo(withRouter(Header));