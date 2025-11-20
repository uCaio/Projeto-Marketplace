'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Tênis Nike Air Max 97',
        marca: 'Nike',
        valor: 800.00,
        preco_original: 1500.00,
        preco_pix: 800.00,
        preco_parcelado: 1450.00,
        cor: 'Preto/Branco',
        tamanhos: '37,38,39,40,41,42',
        imagens: 'nike-air-max-97-1.avif,nike-air-max-97-2.avif,nike-air-max-97-3.avif,nike-air-max-97-4.avif',
        pasta_imagens: 'tenis-masculino/nike/air-max-97',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis Nike TN',
        marca: 'Nike',
        valor: 850.00,
        preco_original: 1600.00,
        preco_pix: 850.00,
        preco_parcelado: 1550.00,
        cor: 'Azul/Preto',
        tamanhos: '38,39,40,41,42,43',
        imagens: 'nike-tn-1.avif,nike-tn-2.avif,nike-tn-3.avif',
        pasta_imagens: 'tenis-masculino/nike/nike-tn',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis Nike Structure 25',
        marca: 'Nike',
        valor: 650.00,
        preco_original: 1200.00,
        preco_pix: 650.00,
        preco_parcelado: 1150.00,
        cor: 'Preto/Branco',
        tamanhos: '35,36,37,38,39',
        imagens: 'nike-structure-1.avif,nike-structure-2.avif,nike-structure-3.avif',
        pasta_imagens: 'tenis-feminino/nike/nike-structure',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis Nike Court Vision',
        marca: 'Nike',
        valor: 550.00,
        preco_original: 1000.00,
        preco_pix: 550.00,
        preco_parcelado: 950.00,
        cor: 'Branco',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'nike-court-vision-1.avif,nike-court-vision-2.avif,nike-court-vision-3.avif',
        pasta_imagens: 'tenis-feminino/nike/nike-court-vision',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis New Balance Nb 808 Lite',
        marca: 'New Balance',
        valor: 799.99,
        preco_original: 1200.00,
        preco_pix: 799.99,
        preco_parcelado: 1150.00,
        cor: 'Branco/preto com detalhes azuis',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'nb-tiago-1.webp, nb-tiago-2.webp, nb-tiago-3.webp, nb-tiago-4.webp, nb-tiago-5.webp, nb-tiago-6.webp',
        pasta_imagens: 'tenis-masculino/new-balance/nb-numeric-tiago-lemos',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis New Balance Nb 306',
        marca: 'New Balance',
        valor: 679.99,
        preco_original: 1000.00,
        preco_pix: 679.99,
        preco_parcelado: 950.00,
        cor: 'Preto/Cobre',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'nb-jamie-1.webp, nb-jamie-2.webp, nb-jamie-3.webp, nb-jamie-4.webp, nb-jamie-5.webp, nb-jamie-6.webp',
        pasta_imagens: 'tenis-masculino/new-balance/nb-numeric-jamie-foy',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis New Balance 9060',
        marca: 'New Balance',
        valor: 1299.99,
        preco_original: 1500.00,
        preco_pix: 1299.99,
        preco_parcelado: 1480.00,
        cor: 'Vermelho/Branco',
        tamanhos: '35,36,37,38,39',
        imagens: 'nb-9060-1.webp, nb-9060-2.webp, nb-9060-3.webp, nb-9060-4.webp, nb-9060-5.webp, nb-9060-6.webp',
        pasta_imagens: 'tenis-feminino/new-balance/nb-9060',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis New Balance 530',
        marca: 'New Balance',
        valor: 749.99,
        preco_original: 1200.00,
        preco_pix: 749.99,
        preco_parcelado: 850.00,
        cor: 'Vermelho/Branco',
        tamanhos: '35,36,37,38,39',
        imagens: 'nb-530-1.webp, nb-530-2.webp, nb-530-3.webp, nb-530-4.webp, nb-530-5.webp, nb-530-6.webp',
        pasta_imagens: 'tenis-feminino/new-balance/nb-530',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis Fila Adventure Tracer 2',
        marca: 'Fila',
        valor: 399.99,
        preco_original: 550.00,
        preco_pix: 399.99,
        preco_parcelado: 520.00,
        cor: 'Preto/Grafite',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'venture-1.webp, venture-2.webp, venture-3.webp, venture-4.webp, venture-5.webp, venture-6.webp, venture-7.webp, venture-8.webp, venture-9.webp',
        pasta_imagens: 'tenis-masculino/fila/fila-venture-tracer-2',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis Fila Corda',
        marca: 'Fila',
        valor: 419.99,
        preco_original: 650.00,
        preco_pix: 419.99,
        preco_parcelado: 620.00,
        cor: 'Preto',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'corda-1.webp, corda-2.webp, corda-3.webp, corda-4.webp, corda-5.webp, corda-6.webp, corda-7.webp, corda-8.webp, corda-9.webp',
        pasta_imagens: 'tenis-masculino/fila/fila-corda',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis Fila Tennis 88 Sport',
        marca: 'Fila',
        valor: 239.99,
        preco_original: 399.99,
        preco_pix: 239.99,
        preco_parcelado: 360.00,
        cor: 'Rosa/Branco',
        tamanhos: '35,36,37,38,39',
        imagens: 'sport-1.webp, sport-2.webp, sport-3.webp, sport-4.webp, sport-5.webp, sport-6.webp, sport-7.webp, sport-8.webp',
        pasta_imagens: 'tenis-feminino/fila/fila-tennis-88-sport',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis Fila X2k',
        marca: 'Fila',
        valor: 599.99,
        preco_original: 800.00,
        preco_pix: 599.99,
        preco_parcelado: 780.00,
        cor: 'Branco/Cinza',
        tamanhos: '35,36,37,38,39',
        imagens: 'x2k-1.webp, x2k-2.webp, x2k-3.webp, x2k-4.webp, x2k-5.webp, x2k-6.webp, x2k-7.webp, x2k-8.webp',
        pasta_imagens: 'tenis-feminino/fila/fila-x2k',
        sexo: 'Feminino'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
