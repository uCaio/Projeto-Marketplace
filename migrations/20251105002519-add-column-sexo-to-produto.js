'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Produtos', 'sexo', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'unissex', // opcional, pode ser 'masculino', 'feminino' ou outro valor padrão
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Produtos', 'sexo');
  }
};
