var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')

// index
router.get('/', skillsCtrl.index);

// new
router.get('/new', skillsCtrl.new);

// show
router.get('/:id', skillsCtrl.show);

// create
router.post('/',skillsCtrl.create);

// delete
router.delete('/:skill', skillsCtrl.delete);

// edit
router.get('/:skill/edit', skillsCtrl.edit)

// update
router.put('/:skill', skillsCtrl.update)

module.exports = router;
