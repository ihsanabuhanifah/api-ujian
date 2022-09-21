const express = require("express");
const router = express.Router();
const {
  createBuku,
  getAllBuku,
  getBukuDetail,
  updateBuku,
} = require("../controllers/BukuController");
const validationMiddleware = require("../middleware/validationMiddleware");
const {
  bukuCreateValidation,
  bukuUpdateValidation,
} = require("./bookValidation");

router.post(
  "/buku/tambah",
  bukuCreateValidation,
  validationMiddleware,
  createBuku,
  updateBuku
);
router.get("/buku/:code", getAllBuku);

router.get("/buku/:code/:id", getBukuDetail);
router.put(
  "/buku/:code/update/:id",
  bukuUpdateValidation,
  validationMiddleware,
  updateBuku
);
module.exports = router;
