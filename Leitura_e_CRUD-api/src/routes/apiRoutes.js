const express = require ("express");
const router = express.Router();

const Controller = require("../controller/apiController");

router.post('/cadastro/novo', Controller.adicionarCliente);

module.exports = router;