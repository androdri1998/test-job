'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      companyId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      operationDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      operationType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      operationValue: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('transactions');
  }
};
