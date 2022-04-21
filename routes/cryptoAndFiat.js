const express = require("express");
const { getCoinsRates } = require("../controllers/cryptoAndFiat");

const router = express.Router();
router.get("/rates", getCoinsRates);

module.exports = router;
