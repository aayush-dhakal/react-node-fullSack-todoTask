const express = require("express");

const app = express();
app.use(express.json());

app.listen({ port: 5000 }, async () => {
  console.log("Server is up on port 5000");
});
