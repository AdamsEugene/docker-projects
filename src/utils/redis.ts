import { createClient } from "redis";

const redisClient = async () => {
  let client;

  if (client) return client;

  client = createClient();

  await client.connect();

  client.on("error", (err) => console.log("Redis Client Error", err));
  client.on("connect", () => console.log("redis connected"));
  client.on("end", (err) => console.log("redis connection end " + err));

  return client;
};

export default redisClient;
