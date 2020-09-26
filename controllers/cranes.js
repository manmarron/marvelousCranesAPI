const CraneModel = require("../models/cranes");

//add new crane to db
exports.create = async (req, res) => {
  const params = { ...req.body };
  CraneModel.create(params)
    .then((crane) => res.status(201).json(crane))
    .catch((err) => res.status(400).json(err));
};

//get crane by ID
exports.getById = (req, res) => {
  const craneID = req.query.id;

  CraneModel.find({
    _id: craneID,
  })
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

exports.getAll = (req, res) => {
  CraneModel.find({})
    .then((cranes) => res.status(200).json(cranes))
    .catch((err) => res.status(404).json({ error: "No cranes found." }));
};

//get all cranes for 1 user
exports.getByUserName = (req, res) => {
  const userName = req.query.craneUser;
  CraneModel.find({
    craneUser: userName,
  })
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

//get number of likes for crane
exports.getByLikes = (req, res) => {
  const craneID = req.query.id;
  CraneModel.find({
    _id: craneID,
  })
    .select("craneLikes")
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

//patch crane by id
exports.updatedCrane = (req, res) => {
  const id = req.query.id;
  CraneModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).json(updated))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be updated." })
    );
};

//delete crane by id
exports.deleteCrane = (req, res) => {
  const id = req.query.id;
  CraneModel.findByIdAndRemove(id)
    .then((removed) => res.status(200).json(removed))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be deleted" })
    );
};

exports.query = (req, res) => {
  let query;

  req.query.query ? (query = req.query.query) : (query = {});

  CraneModel.find(query)

    .then((properties) => res.status(200).json(properties))
    .catch((err) => res.status(404).json(err));
};

//filter on both rating

exports.getByAllRatings = (req, res) => {
  const lowerRate = req.query.bottomRate;
  const higherRate = req.query.topRate;
  const lowerRateC = req.query.bottomRateCrane;
  const higherRateC = req.query.topRateCrane;

  CraneModel.find({
    craneBackgroundRate: { $gte: lowerRate, $lte: higherRate },
    craneRate: { $gte: lowerRateC, $lte: higherRateC },
  })
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

//filter on crane rating
exports.getByCraneRatings = (req, res) => {
  const lowerRate = req.query.bottomRate;
  const higherRate = req.query.topRate;

  CraneModel.find({
    craneRate: { $gte: lowerRate, $lte: higherRate },
  })
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

//filter on bkground rating
exports.getByBkGrdRating = (req, res) => {
  const lowerRate = req.query.bottomRate;
  const higherRate = req.query.topRate;

  CraneModel.find({
    craneBackgroundRate: { $gte: lowerRate, $lte: higherRate },
  })
    .then((crane) => res.status(200).json(crane))
    .catch((err) => res.status(404).json({ error: "Crane not found." }));
};

//get number of likes for crane

exports.updateLikes = (req, res) => {
  const id = req.query.id;
  CraneModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).json(updated))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be updated." })
    );
};
