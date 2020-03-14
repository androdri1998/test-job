import api from '../../services/api';
import { urlsCall } from '../../utils/urls.contants';

export const extractActions = {
  GET_TRANSACTIONS: '@company/GET_TRANSACTIONS',
};

export const getTransactions = async (companyId) => {
  const response = await api.get(urlsCall.GET_TRANSACTIONS.replace(":company_id", companyId));

  return {
    type: extractActions.GET_TRANSACTIONS,
    payload: response.data.transactions
  }
}