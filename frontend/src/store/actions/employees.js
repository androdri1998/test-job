import api from '../../services/api';
import { urlsCall } from '../../utils/urls.contants';

export const employeesActions = {
  GET_EMPLOYEES: '@company/GET_EMPLOYEES',
};

export const getEmployees = async (companyId) => {
  const response = await api.get(urlsCall.GET_EMPLOYEES.replace(":company_id", companyId));

  return {
    type: employeesActions.GET_EMPLOYEES,
    payload: response.data.employees
  }
}