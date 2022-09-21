const BookModel = require("../models").buku;

async function createBuku(req, res) {
  try {
    const paylaod = req.body;
    await BookModel.create(paylaod);
    return res.status(201).json({
      status: "Success",
      msg: "Buku Berhasil diTambahkan",
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      status: "fail",
      msg: "Terjadi Kesalahan",
    });
  }
}

async function updateBuku(req, res) {
  const { id, code } = req.params;
  try {
    const paylaod = req.body;
    await BookModel.update(
      {
        judulBuku: paylaod.judulBuku,
        namaPengarang: paylaod.namaPengarang,
        genre: paylaod.genre,

        namaPenerbit: paylaod.namaPenerbit,
        halaman: paylaod.halaman,
        tahunTerbit: paylaod.tahunTerbit,
        sinopsis: paylaod.sinopsis,
      },
      {
        where: {
          id: id,
          code: code,
        },
      }
    );
    return res.status(201).json({
      status: "Success",
      msg: "Buku Berhasil di update",
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      status: "fail",
      msg: "Terjadi Kesalahan",
    });
  }
}

async function getAllBuku(req, res) {
  try {
    const books = await BookModel.findAll({
      where: {
        code: req.params.code,
      },
    });
    return res.status(201).json({
      status: "Success",
      msg: "Buku ditemukan",
      data: books,
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      status: "fail",
      msg: "Terjadi Kesalahan",
    });
  }
}

async function getBukuDetail(req, res) {
  try {
    const books = await BookModel.findAll({
      where: {
        code: req.params.code,
        id: req.params.id,
      },
    });
    return res.status(201).json({
      status: "Success",
      msg: "Buku ditemukan",
      data: books,
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      status: "fail",
      msg: "Terjadi Kesalahan",
    });
  }
}

module.exports = { createBuku, getAllBuku, getBukuDetail, updateBuku };
