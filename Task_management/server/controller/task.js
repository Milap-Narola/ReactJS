const Task = require('../model/task');
exports.create = async (req, res) => {
    req.body.assignedBy = req.user.id
    let task = await Task.create(req.body);
    res.send(task);
};
exports.getAllTasks = async (req, res) => {
    let query = req.query || {}
    let task = await Task.find(query).populate('assignedBy', "name").populate('assignedTo', "name");

    return res.send(task);
}