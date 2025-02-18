const Router =require('express');
const{createResult,getResult,getResults}=require('../Controller/result.Controller')
const ResultltRouter =Router()


ResultltRouter.post('/',createResult)
ResultltRouter.get('/', getResults)
ResultltRouter.get('/:id', getResult)

module.exports = ResultltRouter;