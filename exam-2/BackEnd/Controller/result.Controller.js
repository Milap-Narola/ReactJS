const Result = require('../model/result');

exports.createResult = async (req, res) => {
  try {
    const { exam, score, totalQuestions, correctAnswers } = req.body;
    const result = new Result({ student: req.user.id, exam, score, totalQuestions, correctAnswers });
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user.id }).populate('exam');
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id).populate('exam');
    if (!result) return res.status(404).json({ message: 'Result not found' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
