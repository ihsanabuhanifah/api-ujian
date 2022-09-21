const userModel = require("../models").User;
const { check } = require("express-validator");

const bukuCreateValidation = [
 
  check("judulBuku").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("namaPengarang").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("genre").exists().isIn(['buku pelajaran','fiksi', 'novel']).withMessage('buku pelajaran | fiksi | novel'),
  check("namaPenerbit").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("halaman").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("tahunTerbit").isLength({ min: 4 , max:4 }).withMessage("Wajib 4"),
  check("sinopsis").isLength({ min: 2 }).withMessage("Minimal 30 karakter"),
  check("code").isLength({ min: 5 }).withMessage("Minimal 5 Karakter"),
];

const bukuUpdateValidation = [
 
  check("judulBuku").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("namaPengarang").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("genre").exists().isIn(['buku pelajaran','fiksi', 'novel']).withMessage('buku pelajaran | fiksi | novel'),
  check("namaPenerbit").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("halaman").isLength({ min: 1 }).withMessage("Wajib diisi"),
  check("tahunTerbit").isLength({ min: 4 , max:4 }).withMessage("Wajib 4"),
  check("sinopsis").isLength({ min: 2 }).withMessage("Minimal 30 karakter"),
 
];



module.exports = { bukuCreateValidation, bukuUpdateValidation };
