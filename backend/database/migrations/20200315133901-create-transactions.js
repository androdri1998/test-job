'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      company_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      operation_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      operation_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      operation_value: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('transactions');
  }
};
