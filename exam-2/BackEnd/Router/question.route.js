const Router = require('express')
const { createQuestion, getQuestions, updateQuestion, deleteQuestion } = require('../Controller/question.controller');

const QuestionRouter = Router();

QuestionRouter.post('/', createQuestion)
QuestionRouter.get('/:id', getQuestions)
QuestionRouter.put('/:id', updateQuestion)
QuestionRouter.delete('/:id', deleteQuestion)

module.exports = QuestionRouter;