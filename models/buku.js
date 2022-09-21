"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buku.init(
    {
      judulBuku: DataTypes.STRING,
      namaPengarang: DataTypes.STRING,
      genre: DataTypes.ENUM("buku pelajaran", "fiksi", "novel"),
      namaPenerbit: DataTypes.STRING,
      halaman: DataTypes.STRING,
      tahunTerbit: DataTypes.STRING,
      sinopsis: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "buku",
    }
  );
  return buku;
};
