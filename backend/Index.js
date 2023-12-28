const express = require('express');
const app = express();
const PORT = 5000;
const cors = require("cors");

require('./db')
app.use(express.json());
app.use(cors());

const userRoute = require('./routes/user.route');
app.use("/user", userRoute);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});