'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
      },
      name:{
        type:Sequelize.STRING,
        allowNull: false
      },
      price:{
        type:Sequelize.DOUBLE,
        allowNull:false
      },
      quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
      allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};
