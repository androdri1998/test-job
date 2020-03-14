import styled from 'styled-components';
import colors from '../../utils/colors';

export const ContainerHeader = styled.div`
  background: ${colors.first_color};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.text_color}
`;

export const TitleHeader = styled.p`
  font-size: 2em;
  font-weight: bold;
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  height: 40px;
  min-width: 100px;
  font-size: 1.2em; 
  padding-right: 10px;
  padding-left: 10px;
  border: solid 2px ${colors.border_color};
  border-radius: 8px;
  background: transparent;
  color: ${colors.text_color};
  cursor: pointer;

  :hover {
    transition: .3s;
    background: rgba(0,0,0,.3)
  }
`;

export const ButtonHeader = styled(Button)`
  margin-right: 20px;
`;

export const TitleLogin = styled.p`
  font-size: 1.3em;
  font-weight: bold;
`;
