import app from "./app";
import { RedisClientType } from "redis";

declare global {
  namespace Express {
    interface Request {
      redis: RedisClientType;
    }
  }
}

const port = 8082;
app.listen(port, async () => {
  console.log(`server is running on port ${port}`);
});
