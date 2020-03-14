import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function BreadcrumbsRender({ breadcrumbs }) {
  return (
    <div>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs && breadcrumbs.map((bread, index) => {
          return index !== (breadcrumbs.length - 1)
            ?(<Typography key={index}>{bread.name}</Typography>) 
            :(<Typography key={index} color="textPrimary">{bread.name}</Typography>)
        })}
      </Breadcrumbs>
    </div>
  );
}

export default React.memo(BreadcrumbsRender);