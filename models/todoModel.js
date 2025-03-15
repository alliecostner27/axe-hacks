const { MongoClient, ObjectId } = require('mongodb');

let db;

const connectDB = async (url) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db('todos');
};

const getCollection = () => {
    return db.collection('todos');
};

const find = async () => {
    const collection = getCollection();
    return await collection.find().toArray();
};

const findById = async (id) => {
    const collection = getCollection();
    return await collection.findOne({ _id: new ObjectId(id) });
};

const save = async (todo) => {
    const collection = getCollection();
    return await collection.insertOne(todo);
};

const updateById = async (id, todo) => {
    const collection = getCollection();
    return await collection.updateOne({ _id: new ObjectId(id) }, { $set: todo });
};

const deleteById = async (id) => {
    const collection = getCollection();
    return await collection.deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
    connectDB,
    find,
    findById,
    save,
    updateById,
    deleteById
};