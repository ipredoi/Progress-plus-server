const express = require('express');
const router = express.Router();

const {
  createBootcamperProfile,
  bootcamperLogin,
  selectAllBootcampers,
  populateDemoData,
} = require('../models/index');

var {
  checkIfAuthenticated,
} = require('../controllers/middleware/auth.middleware');

// Bootcamper routes

// 1. Create a profile with a post request

// This is the bootcamper creating an account, this may not be needed??
// expecting req.body to contain a json with keys of uid, role and cohort.
// returns the data back if needed.

router.post('/', checkIfAuthenticated, async function (req, res, next) {
  try {
    console.log('Creating a bootcamper profile...');
    const profile = req.body;
    const result = await createBootcamperProfile(profile);
    if (profile.role === 'Bootcamper') {
      populateDemoData(profile.uid);
    }
    res.json({ success: true, data: result });
    console.log(`Bootcamper profile created with uid = ${result[0].uid}!`);
  } catch (error) {
    console.log(error.message);
  }
});

// 2. Returns all the names of bootcampers

router.get('/', checkIfAuthenticated, async function (req, res, next) {
  try {
    console.log('Retrieving all profiles ...');
    const result = await selectAllBootcampers();
    res.json({ success: true, data: result });
    console.log(`Recieved all profiles`);
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, data: error.message });
  }
});

// 3. Bootcamper needs to receive profile data from a GET request

// expects nothing in the body and the uid in the params
// returns all the data from that user in the users table
// needed to move to the bottom as it was interfiering with other routes

router.get('/:uid', checkIfAuthenticated, async function (req, res, next) {
  try {
    console.log('Retrieving bootcamper profile ...');
    const uid = req.params.uid;
    const result = await bootcamperLogin(uid);
    res.json({ success: true, data: result });
    console.log(`Recieved bootcamper profile with uid = ${result[0].uid}`);
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, data: error.message });
  }
});

module.exports = router;
