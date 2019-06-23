import express from "express";
import cors from "cors";
import "./config";
import data from "./data";
import router from "./router";

const app = express();
app.use(cors());
app.use("/log", router);

const PORT = process.env.SERVER_PORT || 5000;

// post, get, put, delete
app.get("/init", function(req, res) {
  res.json({ initialState: data });
});

app.listen(PORT, function() {
  console.log(`Express server is running on ${PORT}`);
});
