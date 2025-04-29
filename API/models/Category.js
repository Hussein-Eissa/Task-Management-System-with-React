const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    text: String,
    color: String
}, { collection: 'Category' });

module.exports = mongoose.model('Category', categorySchema);
