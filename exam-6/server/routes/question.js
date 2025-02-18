const Router = require("express");
const question = require("../controller/question.controller");

const QuestionRouter = Router();

QuestionRouter.post("/create", question.createQuestion);
QuestionRouter.get("/all", question.getAllQuestions);
QuestionRouter.get("/", question.getUserQuestions);

module.exports = QuestionRouter;
