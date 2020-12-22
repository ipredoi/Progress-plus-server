const { query } = require('../../index');

const sqlStatement = `
DROP TABLE feedback
;`;

async function dropTable() {
  let res = await query(sqlStatement);
  console.log(res);
}

dropTable();
