const { query } = require('../../index');

const sqlStatement = `
DROP TABLE users
;`;

async function dropTable() {
  let res = await query(sqlStatement);
  console.log(res);
}

dropTable();
