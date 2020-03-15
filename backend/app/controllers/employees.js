const {companys, employees, transactions} = require('../models');

module.exports = {
  getCompany: async (req, res) =>{
    const { company_id } = req.params;
    const response = await companys.findAll({
      where: {
        id: company_id
      }
    }, {raw: true});
  
    res.status(200).send(response[0] || null);
  },
  getEmployees: async (req, res) => {
    const { company_id } = req.params;
    const response = await employees.findAll({
      where: {
        company_id
      }
    }, {raw: true});
  
    res.status(200).send({employees: response});
  },
  getTransactions: async (req, res) => {
    const { company_id } = req.params;
    const response = await transactions.findAll({
      where: {
        company_id
      }
    }, {raw: true});
  
    res.status(200).send({transactions: response});
  }
}