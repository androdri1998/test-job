import api from '../../services/api';
import { urlsCall } from '../../utils/urls.contants';

export const userActions = {
  GET_USER: '@user/GET_USER',
};


export const getUser = async (id) => {
  const response = await api.get(urlsCall.GET_COMPANY.replace(":company_id", id));

  return {
    type: userActions.GET_USER,
    payload: response.data
  }
}