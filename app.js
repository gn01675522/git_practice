const express = require("express");

const PORT = 3000;
const app = express();

const newData = "";

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
