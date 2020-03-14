import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function BreadcrumbsRender({ breadcrumbs }) {
  return (
    <div>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs && breadcrumbs.map((bread, index) => {
          return index !== (breadcrumbs.length - 1)
            ?(<Typography>{bread.name}</Typography>) 
            :(<Typography color="textPrimary">{bread.name}</Typography>)
        })}
      </Breadcrumbs>
    </div>
  );
}