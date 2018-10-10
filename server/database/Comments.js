const Database = require("./index");
const moment = require("moment");

class Comments extends Database {
  static async upload(payload) {
    const {
      message,
      userId: user_id,
      userName: user_name,
      postId: post_id
    } = payload;
    const createdAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const sql = `INSERT INTO comments (
      message, 
      user_id, 
      user_name, 
      post_id, 
      created_at, 
      updated_at
    ) VALUES (
      '${message}', 
      '${user_id}', 
      '${user_name}', 
      '${post_id}', 
      '${createdAt}', 
      '${createdAt}'
    )`;

    const commentId = await this.query(sql).then(res => res.insertId);

    return {
      message,
      user_id,
      user_name,
      post_id,
      comment_id: commentId,
      created_at: createdAt,
      updated_at: createdAt
    };
  }

  static getById(id) {
    const sql = `SELECT * FROM comments WHERE post_id = '${id}'`;
    return this.query(sql);
  }

  static deleteById(commentId, postId) {
    const sql = `DELETE FROM comments WHERE comment_id='${commentId}'`;

    return this.query(sql).then(res => ({
      commentId,
      postId
    }));
  }

  static updateById({ message }, postId, commentId) {
    const updatedAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const sql = `UPDATE comments SET message='${message}', updated_at='${updatedAt}' WHERE comment_id='${commentId}'`;

    return this.query(sql).then(res => {
      return {
        message,
        post_id: postId,
        comment_id: commentId
      };
    });
  }
}

module.exports = Comments;
