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

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    margin-right: 20px;
  }
`;