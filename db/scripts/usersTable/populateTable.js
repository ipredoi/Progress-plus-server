// create mock data

const { query } = require('../../index');

const usersArray = [
  {
    uid: 'd6587569589dk3r437890584gjfni',
    role: 'Bootcamper',
    name: 'Stefan',
    cohort: 4,
  },
  {
    uid: 'd6587969589dk3r437882cbr43298',
    role: 'Bootcamper',
    name: 'Anna',
    cohort: 4,
  },
  {
    uid: 'd658756956bd37r43788hjtrertrt',
    role: 'Coach',
    name: 'Tao',
    cohort: 4,
  },
  {
    uid: 'd658756956bd37r437882cbr43298',
    role: 'Coach',
    name: 'Chris',
    cohort: 4,
  },
  {
    uid: 'd658756956bd37y437882cbr43298',
    role: 'Bootcamper',
    name: 'Jeremy',
    cohort: 4,
  },
];

const sqlStatement = `
    INSERT INTO users
        (uid, role, name, cohort)
    VALUES
        ($1, $2, $3, $4)
;`;

async function populateTable() {
  let userDataArray;
  for (user of usersArray) {
    console.log(user);
    userDataArray = Object.values(user);
    console.log(userDataArray);
    await query(sqlStatement, userDataArray);
  }
}

populateTable();
