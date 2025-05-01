const Category = require('../models/Category');
const Task = require('../models/Task');

async function getAll(req, res) {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
}

async function getById(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category by ID', error: error.message });
    }
}

async function getByName(req, res) {
    try {
        const category = await Category.findOne({ text: req.params.name });
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category by name', error: error.message });
    }
}

async function create(req, res) {
    try {
        const newCategory = new Category(req.body);
        const saved = await newCategory.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json({ message: 'Error creating category', error: error.message });
    }
}

async function update(req, res) {
    try {
        const oldCategory = await Category.findById(req.params.id);
        if (!oldCategory) return res.status(404).json({ message: 'Category not found' });

        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) return res.status(404).json({ message: 'Category update failed' });

        // Update tasks that used the old category text
        await Task.updateMany(
            { category: oldCategory.text },
            { category: updatedCategory.text }
        );

        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error: error.message });
    }
}

async function remove(req, res) {
    try {
        const deleted = await Category.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Category not found' });
        await Task.deleteMany({ category: deleted.text });
        res.json({ message: 'Category and related tasks deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error: error.message });
    }
}

module.exports = {
    getAll,
    getById,
    getByName,
    create,
    update,
    remove
};
