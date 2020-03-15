module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('transactions', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    company_id: DataTypes.STRING,
    operation_date: DataTypes.DATE,
    operation_type: DataTypes.STRING,
    operation_value: DataTypes.DOUBLE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  return Transactions;
}