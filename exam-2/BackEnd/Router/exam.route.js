const Router = require('express')

const {createExam,getExams,getExam,updateExam,deleteExam}= require('../Controller/exam.Controller');
const ExamRouter = Router();

ExamRouter.post('/', createExam)
ExamRouter.get('/', getExams)
ExamRouter.get('/:id', getExam)
ExamRouter.put('/:id', updateExam)
ExamRouter.delete('/:id', deleteExam)

module.exports = ExamRouter;
