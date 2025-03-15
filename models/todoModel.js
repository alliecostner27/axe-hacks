const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');


//need a reference variable to the stories collection in mongodb
let stories;
exports.getCollection = db =>{
    stories = db.collection('todos');
}

exports.find = () => todos.find().toArray();

exports.findById = id => todos.findOne({_id: new ObjectId(`${id}`)});

exports.save = todo => todos.insertOne(todo);

exports.updateById =(id, newTodo) => todos.updateOne({_id: new ObjectId(`${id}`)}, {$set: {title: newTodo.title, content: newTodo.content}});

exports.deleteById = id => todos.deleteOne()