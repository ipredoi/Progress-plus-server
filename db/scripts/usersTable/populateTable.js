// create mock data

const { query } = require("../../index");

const usersArray = [
  {
    uuid: "d6587569589dk3r437890584gjfni",
    role: "Bootcamper",
    bootcamp: 4,
  },
  {
    uuid: "d6587569589dk3r437882cbr43298",
    role: "Bootcamper",
    bootcamp: 4,
  },
  {
    uuid: "d658756956bd37r43788hjtrertrt",
    role: "Coach",
    bootcamp: 4,
  },
  {
    uuid: "d658756956bd37r437882cbr43298",
    role: "Coach",
    bootcamp: 4,
  },
  {
    uuid: "d658756956bd37r437882cbr43298",
    role: "Bootcamper",
    bootcamp: 4,
  },
];

const sqlStatement = `
    INSERT INTO users
        (uuid, role, bootcamp)
    VALUES
        ($1, $2, $3)
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
