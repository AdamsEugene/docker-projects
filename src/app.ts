import express from "express";
import cors from "cors";
import morgan from "morgan";
import { redisUser } from "./middlewares/_redis";

const app = express();

//
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use(redisUser);

app.get("/", async (req, res, next) => {
  await req.redis.incr("visits");
  const visits = await req.redis.get("visits");
  res.send(`get out from here!!!!! ${visits}`);
});

export default app;
