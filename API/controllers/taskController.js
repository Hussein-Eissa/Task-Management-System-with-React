const Task = require("../models/Task");
const Category = require("../models/Category");

async function getAll(req, res) {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
}

async function getById(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching task by ID", error: error.message });
  }
}

async function getByName(req, res) {
  try {
    const name = req.params.name;
    const tasks = await Task.find({
      name: { $regex: name, $options: "i" },
    }).select("-__v");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to search tasks by name", error });
  }
}

async function create(req, res) {
  try {
    const { category } = req.body;
    let categoryExists = await Category.findOne({ text: category });

    // If category doesn't exist, create it
    if (!categoryExists) {
      categoryExists = await Category.create({
        text: category,
        color: "#3ee6bc",
      });
    }

    const newTask = new Task(req.body);
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
}

async function update(req, res) {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task", error: error.message });
  }
}

async function remove(req, res) {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
}

async function getByCategory(req, res) {
  try {
    const category = req.params.category;
    const tasks = await Task.find({ category }).select("-__v");
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks by category", error });
  }
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
  getByCategory,
};
