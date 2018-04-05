const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/', (req, res) => {
  res.sendStatus(201);
});

router.put('/', (req, res) => {
  res.sendStatus(201);
});

router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
