const asyncHandler = require("express-async-handler");

//@desc  Get tickets
//@ route  GET /api/tickets
//@access Public

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get tickets" });
});

//@desc  Set tickets
//@ route  POST /api/tickets
//@access Private

const setTickets = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "set tickets" });
});

//@desc  Update tickets
//@ route  PUT /api/tickets/:id
//@access Public

const updateTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update tickets ${req.params.id}` });
});

//@desc  Delete tickets
//@ route  DELETE /api/tickets/:id
//@access Public

const deleteTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete tickets ${req.params.id}` });
});

module.exports = {
  deleteTickets,
  updateTickets,
  setTickets,
  getTickets,
};
