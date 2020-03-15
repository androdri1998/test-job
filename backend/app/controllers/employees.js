module.exports = {
  getCompany: async (req, res) =>{
    const { company_id } = req.params;
    const user = {
      id: company_id,
      username: "André Rodrigues"
    }
  
    res.status(200).send(user);
  },
  getEmployees: async (req, res) => {
    const { company_id } = req.params;
    const employees = [
      {
        company_id, 
        number_registration: "0001",
        name: "André Rodrigues",
        office: "developer"
      },
      {
        company_id,
        number_registration: "0002",
        name: "João Rodrigues",
        office: "developer"
      },
      {
        company_id,
        number_registration: "0003",
        name: "Lís Rodrigues",
        office: "developer"
      },
    ];
  
    res.status(200).send({employees});
  },
  getTransactions: async (req, res) => {
    const { company_id } = req.params;
    const transactions = [
      {
        company_id,
        operation_date: "2020-01-10",
        operation_type: "SAQUE ATM",
        operation_value: 450
      },
      {
        company_id,
        operation_date: "2020-01-10",
        operation_type: "SAQUE ATM",
        operation_value: 450
      },
      {
        company_id,
        operation_date: "2020-01-10",
        operation_type: "SAQUE ATM",
        operation_value: 450
      },
      {
        company_id,
        operation_date: "2020-01-10",
        operation_type: "SAQUE ATM",
        operation_value: 450
      },
      {
        company_id,
        operation_date: "2020-01-10",
        operation_type: "SAQUE ATM",
        operation_value: 450
      }
    ];
  
    res.status(200).send({transactions});
  }
}