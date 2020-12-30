const { query } = require('../../index');

const sqlStatement = `CREATE TABLE users(
    uid TEXT PRIMARY KEY,
    name TEXT,
    role TEXT,
    cohort INT
);`;

async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}
createTable();
