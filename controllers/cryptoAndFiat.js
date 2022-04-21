const asyncHandler = require("../middleware/async");
const axios = require("axios");

exports.getCoinsRates = asyncHandler(async (req, res, next) => {
  const { data } = await axios.get(process.env.COINGEKO_URL);
  const fiat = Object.values(data.rates)
    .filter((coin) => coin.type === "fiat")
    .slice(0, 5);
  const crypto = Object.values(data.rates)
    .filter((coin) => coin.type === "crypto")
    .slice(0, 5);

  res.status(200).json({
    success: true,
    totalCount: fiat.length + crypto.length,
    fiatCount: fiat.length,
    cryptoCount: crypto.length,
    fiat,
    crypto,
  });
});
