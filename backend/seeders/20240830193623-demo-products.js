'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Gaming Console',
        category: 'Electronics',
        price: 299.99,
        quantity: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: 'Wireless Gaming Mouse',
        category: 'Electronics',
        price: 89.99,
        quantity: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: '4K Gaming Monitor',
        category: 'Electronics',
        price: 399.99,
        quantity: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: 'Action Game XYZ',
        category: 'Games',
        price: 59.99,
        quantity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: 'Strategy Game ABC',
        category: 'Games',
        price: 49.99,
        quantity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      // New Products - Electronics
      {
        name: 'Bluetooth Headphones',
        category: 'Electronics',
        price: 129.99,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: 'Smartphone Charger',
        category: 'Electronics',
        price: 24.99,
        quantity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: 'Smartwatch',
        category: 'Electronics',
        price: 199.99,
        quantity: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      },
      {
        name: 'Laptop Stand',
        category: 'Electronics',
        price: 39.99,
        quantity: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isDeleted: false
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
