const express = require("express");
const cors = require("cors");

// Routes
const analyticsRoute = require("./routes/analyticsRoute");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/ping", (req, res) => res.send("pong"));

// analytics route
app.use("/analytics", analyticsRoute);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
