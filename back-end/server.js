const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");
const port = 3003;


const app = express();

app.use(cors());
app.use(bodyParser.json());

routes.map((route) => app.use(route.path, route.router));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
