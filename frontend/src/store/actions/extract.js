export const extractActions = {
  GET_TRANSACTIONS: '@company/GET_TRANSACTIONS',
};

export const getTransactions = async (companyId) => {
  const transactions = [
    {
      company_id: companyId,
      operation_date: "2020-01-10",
      operation_type: "SAQUE ATM",
      operation_value: 450
    },
    {
      company_id: companyId,
      operation_date: "2020-01-10",
      operation_type: "SAQUE ATM",
      operation_value: 450
    },
    {
      company_id: companyId,
      operation_date: "2020-01-10",
      operation_type: "SAQUE ATM",
      operation_value: 450
    },
    {
      company_id: companyId,
      operation_date: "2020-01-10",
      operation_type: "SAQUE ATM",
      operation_value: 450
    },
    {
      company_id: companyId,
      operation_date: "2020-01-10",
      operation_type: "SAQUE ATM",
      operation_value: 450
    }
  ]

  return {
    type: extractActions.GET_TRANSACTIONS,
    payload: transactions
  }
}