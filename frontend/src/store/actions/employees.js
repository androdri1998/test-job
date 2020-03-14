export const employeesActions = {
  GET_EMPLOYEES: '@company/GET_EMPLOYEES',
};

export const getEmployees = async (companyId) => {
  const employees = [
    {
      number_registration: "0001",
      name: "André Rodrigues",
      office: "developer"
    },
    {
      number_registration: "0002",
      name: "João Rodrigues",
      office: "developer"
    },
    {
      number_registration: "0003",
      name: "Lís Rodrigues",
      office: "developer"
    },
  ]

  return {
    type: employeesActions.GET_EMPLOYEES,
    payload: employees
  }
}