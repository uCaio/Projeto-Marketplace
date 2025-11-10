'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estoques', [
      {
        produtoID: 1,
        quantidade: 10,
        localizacao: 'A1',
        data_atualizacao: new Date()
      },
      {
        produtoID: 2,
        quantidade: 8,
        localizacao: 'B3',
        data_atualizacao: new Date()
      },
      {
        produtoID: 3,
        quantidade: 12,
        localizacao: 'C2',
        data_atualizacao: new Date()
      },
      {
        produtoID: 4,
        quantidade: 20,
        localizacao: 'D4',
        data_atualizacao: new Date()
      },
      {
        produtoID: 5,
        quantidade: 20,
        localizacao: 'E4',
        data_atualizacao: new Date()
      },
      {
        produtoID: 6,
        quantidade: 20,
        localizacao: 'F4',
        data_atualizacao: new Date()
      },
      {
        produtoID: 7,
        quantidade: 20,
        localizacao: 'D4',
        data_atualizacao: new Date()
      },
      {
        produtoID: 8,
        quantidade: 15,
        localizacao: 'A2',
        data_atualizacao: new Date()
      },
      {
        produtoID: 9,
        quantidade: 18,
        localizacao: 'B1',
        data_atualizacao: new Date()
      },
      {
        produtoID: 10,
        quantidade: 9,
        localizacao: 'C3',
        data_atualizacao: new Date()
      },
      {
        produtoID: 11,
        quantidade: 25,
        localizacao: 'E2',
        data_atualizacao: new Date()
      },
      {
        produtoID: 12,
        quantidade: 30,
        localizacao: 'F1',
        data_atualizacao: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estoques', null, {});
  }
};
