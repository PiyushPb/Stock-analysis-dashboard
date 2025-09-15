const express = require("express");
const analyticsData = require("../data/analyticsData");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await analyticsData;
  res.status(200).json({
    success: true,
    payload: data,
    message: "Analytics Data Fetched Successfully",
  });
});

module.exports = router;
