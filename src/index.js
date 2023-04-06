const app = require("./app");
const express = require("express");
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
