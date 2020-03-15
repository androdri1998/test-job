module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('employees', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    company_id: DataTypes.STRING,
    number_registration: DataTypes.INTEGER,
    name: DataTypes.STRING,
    office: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  return Employees;
}