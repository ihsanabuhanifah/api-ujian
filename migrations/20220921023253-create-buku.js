"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bukus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      judulBuku: {
        type: Sequelize.STRING,
      },
      namaPengarang: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.ENUM("buku pelajaran", "fiksi", "novel"),
      },
      namaPenerbit: {
        type: Sequelize.STRING,
      },
      halaman: {
        type: Sequelize.STRING,
      },
      tahunTerbit: {
        type: Sequelize.STRING,
      },
      sinopsis: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bukus");
  },
};
