const express = require("express");
const Posts = require("../database/Posts");
const Comments = require("../database/Comments");

const postsRouter = new express.Router();

postsRouter.patch("/:postId/comments/:commentId", (req, res) => {
  const {
    params: { commentId, postId },
    body
  } = req;

  Comments.updateById(body, postId, commentId)
    .then(comment => {
      res.json({
        comment,
        success: true
      });
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
});

postsRouter.delete("/:postId/comments/:commentId", (req, res) => {
  const {
    params: { commentId, postId }
  } = req;

  Comments.deleteById(commentId, postId)
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

postsRouter.get("/", (req, res) => {
  const query = req.query;

  Posts.getPosts(query)
    .then(payload => {
      res.json({
        success: true,
        ...payload,
        page: parseInt(query.page)
      });
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
});

postsRouter.post("/:id/comments", (req, res) => {
  const {
    body,
    params: { id: postId }
  } = req;

  Comments.upload({ ...body, postId })
    .then(comment => {
      res.json({
        success: true,
        comment
      });
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
});

postsRouter.delete("/:id", (req, res) => {
  const {
    params: { id }
  } = req;

  Posts.deleteById(id)
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

postsRouter.post("/", (req, res) => {
  Posts.upload(req.body)
    .then(payload => {
      res.json({
        success: true,
        payload
      });
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
});

postsRouter.patch("/:id", (req, res) => {
  const {
    params: { id },
    body
  } = req;

  Posts.updateById(body, id)
    .then(post => {
      res.json({
        post,
        success: true
      });
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
});

module.exports = postsRouter;
