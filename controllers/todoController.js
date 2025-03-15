const model = require('../models/todoModel');

exports.index = async (req, res, next) => {
    try {
        const todos = await model.find();
        res.render('index', { todos });
    } catch (err) {
        next(err);
    }
};

exports.new = (req, res) => {
    res.render('todos/new');
};

exports.create = async (req, res, next) => {
    try {
        let todo = req.body;
        todo.createdAt = new Date();
        await model.save(todo);
        res.redirect('/todos');
    } catch (err) {
        next(err);
    }
};

exports.show = async (req, res, next) => {
    try {
        let id = req.params.id;
        const todo = await model.findById(id);
        if (todo) {
            res.render('todos/show', { todo });
        } else {
            let err = new Error('Cannot find a planner with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

exports.edit = async (req, res, next) => {
    try {
        let id = req.params.id;
        const todo = await model.findById(id);
        if (todo) {
            res.render('todos/edit', { todo });
        } else {
            let err = new Error('Cannot find a planner with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        let id = req.params.id;
        let todo = req.body;
        await model.updateById(id, todo);
        res.redirect('/todos/' + id);
    } catch (err) {
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        let id = req.params.id;
        const result = await model.deleteById(id);
        if (result.deletedCount === 1) {
            res.redirect('/todos');
        } else {
            let err = new Error('Cannot find a planner with id ' + id);
            err.status = 404;
            next(err);
        }
    } catch (err) {
        next(err);
    }
};