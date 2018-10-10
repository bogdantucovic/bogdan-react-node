const mysql = require("mysql");
const databaseConfig = require("./server/config").database;

(function migrate() {
  const { user, host, password, database } = databaseConfig;

  const createDatabaseSQL = `CREATE DATABASE ${database} CHARACTER SET utf8 COLLATE utf8_unicode_ci`;

  const createUsersTableSQL = `
    CREATE TABLE users ( 
    id INT(11) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(191), 
    email VARCHAR(191),
    password VARCHAR(191),
    PRIMARY KEY (id)
  ) CHARACTER SET utf8 COLLATE utf8_unicode_ci`;

  const createPostsTableSQL = `CREATE TABLE posts ( 
    post_id INT(11) NOT NULL AUTO_INCREMENT, 
    user_id INT(11), 
    img VARCHAR(191),
    message VARCHAR(191),
    created_at VARCHAR(191),
    updated_at VARCHAR(191),
    PRIMARY KEY (post_id)
  ) CHARACTER SET utf8 COLLATE utf8_unicode_ci`;

  const createCommentsTableSQL = `CREATE TABLE comments ( 
    comment_id INT(11) NOT NULL AUTO_INCREMENT, 
    post_id INT(11), 
    user_id INT(11),
    user_name VARCHAR(191),
    message VARCHAR(191),
    created_at VARCHAR(191),
    updated_at VARCHAR(191),
    PRIMARY KEY (comment_id)
  ) CHARACTER SET utf8 COLLATE utf8_unicode_ci`;

  const connection = mysql.createConnection({ user, host, password });

  connection.query(createDatabaseSQL, err => {
    if (!err) {
      connection.end();
      const conectionWithDatabase = mysql.createConnection(databaseConfig);

      conectionWithDatabase.query(createUsersTableSQL, err => {
        if (!err) {
          conectionWithDatabase.query(createPostsTableSQL, err => {
            if (!err) {
              conectionWithDatabase.query(createCommentsTableSQL, err => {
                if (!err) {
                  conectionWithDatabase.end();
                }
              });
            }
          });
        }
      });
    }
  });
})();
