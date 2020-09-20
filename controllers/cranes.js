const CraneModel = require("../models/cranes");

exports.create = async (req, res) => {
  const params = { ...req.body};
  CraneModel.create(params)
    .then((crane) => res.status(201).json(crane))
    .catch((err) => res.status(400).json(err));
};

exports.getById = (req, res) => {
  CraneModel.find(req.params.craneUser).then((crane) => {
    if (crane) {
      res.status(200).json(crane);
    } else {
      res.status(404).json({ error: "crane not found." });
    }
  });
};

exports.query = (req, res) => {
  let query, sort;

  req.query.query ? (query = JSON.parse(req.query.query)) : (query = {});
  req.query.sort ? (sort = JSON.parse(req.query.sort)) : (sory = {});

  CraneModel.find(query)
    .sort(sort)
    .then((properties) => res.status(200).json(properties))
    .catch((err) => res.status(404).json(err));
};

exports.updatedCrane = (req, res) => {
  const id = req.params.id;
  CraneModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).json(updated))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be updated." })
    );
};

exports.deleteCrane = (req, res) => {
  const id = req.params.id;
  CraneModel.findByIdAndRemove(id)
    .then((removed) => res.status(200).json(removed))
    .catch((err) =>
      res.status(400).json({ error: "crane could not be deleted" })
    );
};

exports.queryByLocation = (req, res) => {
  const query = req.params.location;
  CraneModel.find({ city: query })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};