const express = require("express");

const app = express();
app.use(express.json());

const db = require("./models");

app.use("/api/todo", require("./routes/todo"));
app.use("/api/subtask", require("./routes/subtask"));

app.listen({ port: 5000 }, async () => {
  console.log("Server is up on port 5000");

  await db.sequelize.authenticate();
  console.log("Database synced!");
});
