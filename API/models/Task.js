const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
    text: String,
    color: String
});

const taskSchema = new mongoose.Schema({
    name: String,
    category: { type: String, ref: 'Category' },
    priority: String,
    date: String,
    status: String,
    keywords: [keywordSchema],
    details: String
}, { collection: 'Tasks' });

module.exports = mongoose.model('Task', taskSchema);
