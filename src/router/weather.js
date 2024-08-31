import express from "express";
import axios from "axios";
const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;

  const resp = await axios
    .get("http://api.weatherstack.com/current", {
      params: {
        access_key: "22c692577a7acdddfcabdad4629a872f",
        query: body.city,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error };
    });

  res.json({
    data: { city: body.city, ...resp },
  });
});

module.exports = router;
