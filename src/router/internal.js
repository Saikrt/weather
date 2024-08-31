import express from "express";
import axios from "axios";
const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;

  const resp = await axios
    .post(
      "http://localhost:4000/weather",
      { city: body.city },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error };
    });

  console.log(resp.data, " resp");

  res.render("index", { ...resp.data });
});

module.exports = router;
