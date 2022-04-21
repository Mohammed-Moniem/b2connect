const asyncHandler = require("../middleware/async");
const axios = require("axios");

exports.getMovies = asyncHandler(async (req, res, next) => {
  const { data } = await axios.get(process.env.MOVIES_URL);
  res.status(200).json({
    success: true,
    data: data.results.splice(0, 10),
  });
});
