import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbsRender from './BreadcrumbsRender';

export default function Breadcrumbs({ breadcrumbs }){
  return(
    <BreadcrumbsRender 
      breadcrumbs={breadcrumbs}/>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};