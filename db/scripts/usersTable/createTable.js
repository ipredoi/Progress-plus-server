const { query } = require('../../index');

const sqlStatement = `CREATE TABLE users(
    uuid TEXT PRIMARY KEY,
    role TEXT,
    bootcamp INT
);`;

async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}
createTable();
