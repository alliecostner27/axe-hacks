const model = require('../models/todoModel');

exports.index = (req, res, next)=>{
    model.find()
    .then(todos => res.render('./index', {todos}))
    .catch(err => next(err));
};

exports.new = (req, res)=>{
    res.render('./todos/new');
};

exports.create = (req, res, next)=>{
    //res.send('Created a new todo)');
    let todo = req.body;
    todo.createdAt = new Date();
    model.save(todo)
    .then(result => res.redirect('/todos'))
    .catch(err => next(err));
};

exports.show = (req, res, next)=>{
    let id = req.params.id; //string type
    model.findById(id)
    .then(todo => {
        if(todo) {
            res.render('./todo/show', {todo});
        } else {
            let err = new Error('Cannot find a planner with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));

};

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    model.findById(id)
    .then(todo => 
        {if(todo) {
        res.render('./todo/edit', {todo});
        } else {
        let err = new Error('Cannot find a planner with id ' + id);
        err.status = 404;
        next(err);
    }})
    .catch(err => next(err));

};

exports.update = (req, res, next)=>{
    let todo = req.body;
    let id = req.params.id;

    model.updateById(id, todo)
    .then(result => {
        if(result.modifiedCount === 1){
            res.redirect('/todos/'+id)
        }else{
            let err = new Error('Cannot find a planner with id ' + id);
            err.status = 404;
            next(err);
        };
        })
    .catch(err => next(err));

};

exports.delete = (req, res, next)=>{
    let id = req.params.id;

    model.deleteById(id)
    .then(result => {
        if(result.deletedCount === 1){
            res.redirect('/todos');
        }else{
            let err = new Error('Cannot find a planner with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
}