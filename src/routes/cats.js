const router = require('express').Router();
const catController = require('../controllers/cats');

router.get('/', catController.getCats);

router.get('/:id', catController.getCatById);

router.post('/', catController.createCat);

router.put('/:id', catController.updateCat);

router.delete('/:id', catController.deleteCat);

module.exports = router;
