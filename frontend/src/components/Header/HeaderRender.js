import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  ContainerHeader,
  ContainerActions
} from './styles';

function HeaderRender({ onClickExtract, onClickEmployees, username }){
  return(
    <AppBar position="static">
        <ContainerHeader>
          <Typography variant="h4">Company portal - Soma</Typography>
          <ContainerActions>
            <Button variant="outlined" onClick={onClickExtract} color="inherit" >Extract</Button>
            <Button variant="outlined"onClick={onClickEmployees} color="inherit" >employees</Button>
            <Typography variant="h6">{username}</Typography>
          </ContainerActions>
        </ContainerHeader>
    </AppBar>
  );
}

export default React.memo(HeaderRender);