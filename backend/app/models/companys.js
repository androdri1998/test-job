module.exports = (sequelize, DataTypes) => {
  const Companys = sequelize.define('companys', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    username: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  return Companys;
}