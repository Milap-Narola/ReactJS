const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UserRouter = require('./routes/user');
const QuestionRouter = require('./routes/question');

require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use(express.json());
app.use("/api/users", UserRouter)
app.use('/api/question', QuestionRouter)


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    connectDB();
});