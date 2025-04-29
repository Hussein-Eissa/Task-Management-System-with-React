const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.get('/name/:name', categoryController.getByName);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.remove);

module.exports = router;
