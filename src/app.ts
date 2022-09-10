import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

//
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.send("get out from here!!!!!");
});

export default app;
