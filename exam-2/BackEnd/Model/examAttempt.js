const mongoose = require('mongoose');

const examAttemptSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  answers: [{ 
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    selectedAnswer: Number
  }],
  startTime: { type: Date, default: Date.now },
  endTime: Date
});
const ExamAttempt =mongoose.model('ExamAttempt', examAttemptSchema);
module.exports = ExamAttempt;
