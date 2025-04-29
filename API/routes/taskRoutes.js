const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAll);
router.get('/:id', taskController.getById);
router.get('/name/:name', taskController.getByName);
router.get('/category/:category', taskController.getByCategory);
router.post('/', taskController.create);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);

module.exports = router;
