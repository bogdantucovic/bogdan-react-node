const express = require('express');
const fs = require('fs');

const uploadRouter = new express.Router();
const path = process.env.PWD + '/server/static/assets/imgs/';

uploadRouter.post('/', function(req, res) {
  const error = { 
    error: true 
  };

  if (!req.files) {
    return res.json(error);
  }
    
  const file = req.files.file;
  const { name : fileName } = file;

  file.mv(path + fileName , function(err) {
    if (err) {
      return res.json(error);;
    }
    
    return res.json({ fileName });
  });
});

uploadRouter.delete('/', function(req, res) {
  const { fileName } = req.body;
     
  fs.unlink(path + fileName, function(err) {
    if (err) {
      return res.json({ error: true });
    }
    return res.json({ error: false });
  });
});

module.exports = uploadRouter;