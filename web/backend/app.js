const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3001;


const app = express();
const router = express.Router();

app.use(cors());

app.use(router);


app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))