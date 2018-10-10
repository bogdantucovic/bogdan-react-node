const express = require("express");
const Users = require("../database/User");

const usersRouter = new express.Router();

usersRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.getUser(id)
    .then(payload => {
      res.json({
        success: true,
        ...payload
      });
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
});

module.exports = usersRouter;
