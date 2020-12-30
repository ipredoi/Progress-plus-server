const express = require('express');
const router = express.Router();

const {
  createBootcamperProfile,
  bootcamperLogin,
  getBootcamperFeedback,
  getAllFeedback,
  postFeedback,
} = require('../models/index');

// Bootcamper routes

// 1. Create a profile with a post request

// This is the bootcamper creating an account, this may not be needed??
// expecting req.body to contain a json with keys of uid, role and cohort.
// returns the data back if needed.

router.post('/', async function (req, res, next) {
  try {
    console.log('Creating a bootcamper profile...');
    const profile = req.body;
    const result = await createBootcamperProfile(profile);
    res.json({ success: true, data: result });
    console.log(`Bootcamper profile created with uid = ${result[0].uid}!`);
  } catch (error) {
    console.log(error.message);
  }
});

// 3. Need individual feedback through GET request - displayed through different tasks by one GET request.

// This is the bootcamper viewing the different types of feedback in different pages.
// expects a request to /feedback with uid and taskType in the params separated by a /.
// returns all the data in the table for the corresponding user of the specified taskType. (mastery/recap)

router.get('/feedback', async function (req, res, next) {
  try {
    console.log('retrieving feedback ...');
    const feedbackRequest = {
      uid: req.query.uid,
      type: req.query.taskType,
    };
    const result = await getBootcamperFeedback(feedbackRequest);
    res.json({ success: true, data: result });
    console.log(
      `feedback retrieved for user with uid =${result[0].bootcamperuid}`
    );
  } catch (error) {
    console.log(error.message);
  }
});

// 3. POST request to send bootcamper feedback

// the coaches sending bootcampers feedback to the database
// expecting json with keys of bootcamperuid, coachName, dateSubmitted, subject, week, taskType, quantitative, qualitative, dueDate and dateSubmitted.
// returns the data in the same format if needed.

router.post('/feedback', async function (req, res, next) {
  try {
    console.log('Posting feedback ...');
    const feedback = req.body;

    const result = await postFeedback(feedback);
    res.json({ success: true, data: result });
    console.log(
      `Feedback posted for user with uid = ${result[0].bootcamperuid}`
    );
  } catch (err) {
    console.log(err.message);
  }
});

// 4. GET requests to view the bootcamper feedback

// request from the coaches to view all of the bootcamper data
// return

router.get('/allbootcamperfeedback', async function (req, res, next) {
  try {
    console.log('retrieving all of the bootcamper feedback...');
    const result = await getAllFeedback();
    res.json({ success: true, data: result });
    console.log('all of the feedback retrieved');
  } catch (error) {
    console.log(error.message);
  }
});

// 2. Bootcamper needs to receive profile data from a GET request

// expects nothing in the body and the uid in the params
// returns all the data from that user in the users table
// needed to move to the bottom as it was interfiering with other routes

router.get('/:uid', async function (req, res, next) {
  try {
    console.log('Retrieving bootcamper profile ...');
    const uid = req.params.uid;
    const result = await bootcamperLogin(uid);
    res.json({ success: true, data: result });
    console.log(`Recieved bootcamper profile with uid = ${result[0].uid}`);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
