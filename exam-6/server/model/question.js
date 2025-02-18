const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questionText: { type: String, required: true }
});

Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;