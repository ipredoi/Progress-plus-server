const { query } = require('../db/index');

// Bootcamper routes

// 1. Create a profile with a post request
async function createBootcamperProfile(profile) {
  console.log('hello world');
  const result = await query(
    `INSERT INTO users(uuid, role, bootcamp) VALUES ($1, $2, $3) RETURNING *;`,
    [profile.uuid, profile.role, profile.bootcamp]
  );
  return result.rows;
}
// 2. Bootcamper needs to receive profile data from a GET request
async function bootcamperLogin(profile) {
  const result = await query(`SELECT * FROM users WHERE uuid = $1 ;`, [
    profile.uuid,
  ]);
  return result.rows;
}

// 3. Need individual feedback through GET request - displayed through different tasks by one GET request.

async function getBootcamperFeedback(profile) {
  const result = await query(
    `SELECT * FROM feedback WHERE bootcamper_uuid = $1 AND type_of_task = $2 ;`,
    [profile.uuid, profile.type]
  );
  return result.rows;
}

// 4.

async function postFeedback() {}

module.exports = {
  createBootcamperProfile,
  bootcamperLogin,
  getBootcamperFeedback,
  postFeedback,
};
