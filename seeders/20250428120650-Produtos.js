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
        preco_parcelado: 950.00,
        cor: 'Preto e Branco',
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
        preco_parcelado: 1000.00,
        cor: 'Azul e Preto',
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
        preco_parcelado: 750.00,
        cor: 'Preto e Branco',
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
        preco_parcelado: 650.00,
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
        preco_parcelado: 850.00,
        cor: 'Branco e preto com detalhes azuis',
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
        preco_parcelado: 750.00,
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
        preco_parcelado: 900.00,
        cor: 'Vermelho e Branco',
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
        cor: 'Vermelho e Branco',
        tamanhos: '35,36,37,38,39',
        imagens: 'nb-530-1.webp, nb-530-2.webp, nb-530-3.webp, nb-530-4.webp, nb-530-5.webp, nb-530-6.webp',
        pasta_imagens: 'tenis-feminino/new-balance/nb-530',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis Puma-180',
        marca: 'Puma',
        valor: 599.99,
        preco_original: 900.00,
        preco_pix: 599.99,
        preco_parcelado: 750.00,
        cor: 'Cinza e Verde',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'puma-180-1.avif, puma-180-2.avif, puma-180-3.avif, puma-180-4.avif, puma-180-5.avif, puma-180-6.avif',
        pasta_imagens: 'tenis-masculino/puma/puma-180',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis Puma Caven 2.0 BDP',
        marca: 'Puma',
        valor: 309.99,
        preco_original: 449.99,
        preco_pix: 309.99,
        preco_parcelado: 420.00,
        cor: 'Branco e Cinza',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'puma-caven-1.avif, puma-caven-2.avif, puma-caven-3.avif, puma-caven-4.avif, puma-caven-5.avif, puma-caven-6.avif',
        pasta_imagens: 'tenis-masculino/puma/puma-caven',
        sexo: 'Masculino'
      },
      {
        nome: 'Tênis Puma Suede XL',
        marca: 'Puma',
        valor: 599.99,
        preco_original: 800.00,
        preco_pix: 599.99,
        preco_parcelado: 650.00,
        cor: 'Preto',
        tamanhos: '35,36,37,38,39',
        imagens: 'puma-suede-1.avif, puma-suede-2.avif, puma-suede-3.avif, puma-suede-4.avif, puma-suede-5.avif, puma-suede-6.avif',
        pasta_imagens: 'tenis-feminino/puma/puma-suede',
        sexo: 'Feminino'
      },
      {
        nome: 'Tênis Palermo Elevata Wild Instinct',
        marca: 'Puma',
        valor: 599.99,
        preco_original: 800.00,
        preco_pix: 599.99,
        preco_parcelado: 650.00,
        cor: 'Preto',
        tamanhos: '35,36,37,38,39',
        imagens: 'puma-palermo-1.avif, puma-palermo-2.avif, puma-palermo-3.avif, puma-palermo-4.avif, puma-palermo-5.avif, puma-palermo-6.avif',
        pasta_imagens: 'tenis-feminino/puma/puma-palermo',
        sexo: 'Feminino'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
