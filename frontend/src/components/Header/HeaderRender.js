import React from 'react';
import {
  ContainerHeader,
  TitleHeader,
  ContainerActions,
  ButtonHeader,
  TitleLogin
} from './styles';

export default function HeaderRender({ onClickExtract, onClickEmployees, username }){
  return(
    <ContainerHeader>
      <TitleHeader>Company portal - Soma</TitleHeader>
      <ContainerActions>
        <ButtonHeader onClick={onClickExtract}>Extract</ButtonHeader>
        <ButtonHeader onClick={onClickEmployees}>employees</ButtonHeader>
        <TitleLogin>{username}</TitleLogin>
      </ContainerActions>
    </ContainerHeader>
  );
}