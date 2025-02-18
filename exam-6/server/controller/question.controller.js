const Question = require('../model/question');
const User = require('../model/user');

exports.createQuestion = async (req, res) => {
  try {
    const question = new Question({
      userId: req.user.userId,
      questionText: req.body.questionText
    });
    await question.save();
    res.status(201).json({ message: 'Question created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating question' });
  }
};

exports.getAllQuestions = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Only admins can view all questions' });

  try {
    const questions = await Question.find().populate('userId', 'username');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

exports.getUserQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ userId: req.user.userId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user questions' });
  }
};
