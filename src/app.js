import express, { json } from "express";
import path from "path";
import weatherRoutes from "./router/weather";
import internalRoutes from "./router/internal";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/weather", weatherRoutes);
app.use("/internal", internalRoutes);
const PORT = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  // res.json({ status: true, message: "Our node.js app works" });
  res.render("index");
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
