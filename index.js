const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: 'http://localhost:3000' // Adjust the origin as needed
}));

const application = require("./route/api");

app.use(express.json());
app.use('/api', application);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port', PORT));
