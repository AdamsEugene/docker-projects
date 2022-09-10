import app from "./app";

const port = 8082;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
