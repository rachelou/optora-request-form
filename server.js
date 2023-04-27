const express = require("express");
const app = express();
const port = 3000; // You can choose any port number you prefer

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
