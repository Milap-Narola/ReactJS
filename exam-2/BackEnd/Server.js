const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UserRouter = require('./Router/user.route');
const ExamRouter = require('./Router/exam.route');
const QuestionRouter = require('./Router/question.route');
const ResultltRouter = require('./Router/result.route');

require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use(express.json());
app.use("/api", UserRouter)
app.use('/api', ExamRouter)
app.use('/api', QuestionRouter)
app.use('/api', ResultltRouter)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    connectDB();
});
