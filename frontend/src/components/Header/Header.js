import React from 'react';
import PropTypes from 'prop-types';
import HeaderRender from './HeaderRender';

export default function Header({ onClickExtract, onClickEmployees, username }){
  return(
    <HeaderRender 
      onClickExtract={onClickExtract}
      onClickEmployees={onClickEmployees}
      username={username}/>
  );
}

Header.propTypes = {
  onClickExtract: PropTypes.func.isRequired,
  onClickEmployees: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};