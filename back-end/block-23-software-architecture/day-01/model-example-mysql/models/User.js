const connection = require('./connection');

// const createNewUser = ({firstName, lastName, email, password}) => {
//   return {
//     firstName,
//     lastName,
//     email,
//     password,
//   }
// }

const serialize = (userData) => {
  return {
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email,
    password: userData.password
  }
}

const createUser = async (firstName, lastName, email, password) => await connection.execute(
    `INSERT INTO users.user (first_name, last_name, email, password) VALUES(?, ?, ?, ?)`,
    [firstName, lastName, email, password]
  );

const getAll = async () => {
  const [user] = await connection.execute(
    `SELECT * FROM users.user`
  );
  return user.map(serialize);
};

const getById = async (id) => {
  const [user] = await connection.execute(
  `SELECT * FROM users.user WHERE id = ?`, [id]
  );
  return user.map(serialize);
};

const updateUser = async (id, firstName, lastName, email, password) => await connection.execute(
  `UPDATE users.user
  SET first_name = ?,
  last_name = ?,
  email = ?,
  password = ?
  WHERE id = ?`,
  [firstName, lastName, email, password, id]
);

const deleteUser = async (id) => await connection.execute(
  `DELETE FROM users.user WHERE id = ?`, [id]
);

module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
}