const db = require("../db/tickets");

const sell = (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  res.status(201).json({ message: "Ticket created successfully", ticket });
};

const bulkbuy = (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res.status(201).json({ message: "Ticket created successfully", tickets });
};

const draw = (req, res) => {
  const winnerCount = req.params.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json(winners);
};

const find = (_req, res) => {
  const tickets = db.find();
  res.status(200).json(tickets);
};

const findByID = (req, res) => {
  const ticketId = req.params.id;
  const ticket = db.findByID(ticketId);
  res.status(200).json(ticket);
};

const updatebyId = (req, res) => {
  const ticketId = req.params.id;
  const ticket = db.updatebyId(ticketId, req.body);
  res.status(200).json(ticket);
};

const deleteById = (req, res) => {
  const ticketId = req.params.id;
  const ticket = db.delete(ticketId);
  res.status(200).json(ticket);
};

const findByUsername = (req, res) => {
  const username = req.params.username;
  const ticket = db.findByUsername(username);
  res.status(200).json(ticket);
};

const updatebyUsername = (req, res) => {
  const username = req.params.username;
  const ticket = db.updatebyUsername(username, req.body);
  res.status(200).json(ticket);
};

module.exports = {
  sell,
  bulkbuy,
  find,
  draw,
  findByID,
  updatebyId,
  deleteById,
  findByUsername,
  updatebyUsername,
};
