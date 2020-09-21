const CraneModel = require("../models/cranes");

//add new crane to db
exports.create = async (req, res) => {
  const params = { ...req.body};
  CraneModel.create(params)
    .then((crane) => res.status(201).json(crane))
    .catch((err) => res.status(400).json(err));
};

//get crane by ID
exports.getById = (req, res) => {
  const id = req.params.id;

  CraneModel.findById(id)
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

//get all cranes for 1 user
exports.getByUserName = (req, res) => {
  const userName = req.params.userName;
  CraneModel
    .find({"craneUser" : userName })
    .then(
      (crane) => res.status(200).json(crane)
      )
    .catch(
      (err) => res.status(404).json({ error: "Crane not found." })
      );
};

//get number of likes for crane
exports.getByLikes = (req, res) => {
  const id = req.params.id;
  CraneModel
  .findById(id)
  .select("craneLikes")
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};
//patch crane by id
exports.updatedCrane = (req, res) => {
  const id = req.params.id;
  CraneModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).json(updated))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be updated." })
    );
};
//delete crane by id
exports.deleteCrane = (req, res) => {
  const id = req.params.id;
  CraneModel.findByIdAndRemove(id)
    .then((removed) => res.status(200).json(removed))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be deleted" })
    );
};


exports.query = (req, res) => {
  let query, sort;

  req.query.query ? (query = JSON.parse(req.query.query)) : (query = {});
  req.query.sort ? (sort = JSON.parse(req.query.sort)) : (sort = {});

  CraneModel.find(query)
    .sort(sort)
    .then((properties) => res.status(200).json(properties))
    .catch((err) => res.status(404).json(err));
};


/*exports.queryByLocation = (req, res) => {
  const query = req.params.location;
  CraneModel.find({ city: query })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};*/