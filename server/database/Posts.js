const Database = require("./index");
const User = require("./User");
const Comments = require("./Comments");
const moment = require("moment");

class Posts extends Database {
  static async upload({ userId, img, message }) {
    const createdAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    const query = `INSERT INTO posts (
      user_id, 
      img, 
      message,
      created_at, 
      updated_at
    ) VALUES (
      '${userId}', 
      '${img}', 
      '${message}', 
      '${createdAt}', 
      '${createdAt}'
    )`;

    const payload = await this.query(query).then(async result => {
      let post = {
        img,
        message,
        created_at: createdAt,
        updated_at: createdAt,
        user_id: userId,
        post_id: result.insertId
      };
      post.user = await User.getUser(userId);
      return post;
    });

    return payload;
  }

  static async getPosts({ page, limit, user_id: userId }) {
    const offset = (page - 1) * limit;
    let itemsQuery = null;
    let total = null;

    if (userId !== "undefined") {
      total = await this.getTotalByFilter("posts", "user_id", userId);
      itemsQuery = `SELECT * FROM posts WHERE user_id='${userId}' LIMIT ${limit} OFFSET ${offset}`;
    } else {
      total = await this.getTotal("posts");
      itemsQuery = `SELECT * FROM posts LIMIT ${limit} OFFSET ${offset}`;
    }

    let items = await this.query(itemsQuery);
    items = await Promise.all(
      items.map(async item => {
        const { post_id, user_id } = item;
        const user = await User.getUser(user_id);
        const comments = await Comments.getById(post_id);
        item.comments = comments;
        item.user = user;

        return item;
      })
    );

    return { items, total };
  }

  static deleteById(postId) {
    const sql = `DELETE FROM posts WHERE post_id='${postId}'`;

    return this.query(sql)
      .then(res => {
        const sqlComments = `DELETE FROM comments WHERE post_id='${postId}'`;
        this.query(sqlComments).then(res => {
          return { postId };
        });
      })
      .catch(err => err);
  }

  static updateById(payload, postId) {
    const { message, img } = payload;
    const updatedAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const sql = `UPDATE posts SET message='${message}', img='${img}', updated_at='${updatedAt}' WHERE post_id='${postId}'`;

    return this.query(sql).then(result => {
      return {
        img,
        message,
        updatedAt,
        post_id: postId
      };
    });
  }
}

module.exports = Posts;
