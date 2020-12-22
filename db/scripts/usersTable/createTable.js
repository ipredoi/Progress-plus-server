const { query } = require('../../index');

const sqlStatement = `CREATE TABLE users(
    uuid TEXT PRIMARY KEY,
    role TEXT,
    cohort INT
);`;

async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}
createTable();
