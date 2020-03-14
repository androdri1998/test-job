import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbsRender from './BreadcrumbsRender';

function Breadcrumbs({ breadcrumbs }){
  return(
    <BreadcrumbsRender 
      breadcrumbs={breadcrumbs}/>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};

export default React.memo(Breadcrumbs);