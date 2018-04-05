const dummyData = require('../../data/kittens');

const getCats = (req, res) => {
  res.json(dummyData.data);
};

const getCatById = (req, res) => {
  const id = req.params.id;

  if (id < 0 || id >= dummyData.data.length) {
    res.sendStatus(400);
  } else {
    res.send(dummyData.data[id]);
  }
};

const createCat = (req, res) => {
  const newCat = req.body;
  dummyData.data.push(newCat);

  res.sendStatus(201);
};

const updateCat = (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  for(let prop in newData) {
    dummyData.data[id][prop] = newData[prop];
  }

  res.sendStatus(200);
};

const deleteCat = (req, res) => {
  const id = req.params.id;

  dummyData.data.splice(id, 1);
  res.sendStatus(201);
};

module.exports = {
  getCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
};
