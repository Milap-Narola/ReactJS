const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UserRouter = require('./routes/user');


require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use(express.json());
app.use("/api/v1", UserRouter)

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    connectDB();
});