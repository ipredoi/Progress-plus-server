const express = require('express');
const router = express.Router();

// Bootcamper routes

// 1. Create a profile with a post request

// This is the bootcamper creating an account, this may not be needed??

router.post('/create', async function (req, res, next) {
  try {
    console.log('Creating a bootcamper profile...');
    const profile = req.body;
    const result = await createBootcamperProfile(profile);
    res.json({ success: true, data: result });
    console.log('Bootcamper profile created!');
  } catch (error) {
    console.log(error.message);
  }
});

// 2. Bootcamper needs to receive profile data from a GET request

// This is the bootcamper logging in, will need to be changed??

router.get('/login', async function (req, res, next) {
  try {
    console.log('Retrieving bootcamper profile ...');
    // not sure about the next line for using firsbase, will need to check later
    const userDetails = req.query;
    //
    const result = await bootcamperLogin(userDetails);
    res.json({ success: true, data: result });
    console.log('Recieved bootcamper profile');
  } catch (error) {
    console.log(error.message);
  }
});
// What Freshta's team did on project week using firebase
// router.get("/:uuid", async (req, res) => {
//   const uuid = req.params.uuid;
//   console.log(uuid);
//   const data = await getDataByDate(uuid);
//   console.log(data);
//   res.json({ success: true, payload: data });
// });

// 3. Need individual feedback through GET request - displayed through different tasks by one GET request.

// This is the bootcamper viewing the different types of feedback in different pages.

router.get('/feedback', async function (req, res, next) {
  try {
    console.log('retrieving feedback ...');
    const feedbackRequest = req.body;
    const result = await getBootcamperFeedback(feedbackRequest);
    res.json({ success: true, data: result });
    console.log('feedback retrieved');
  } catch (error) {
    console.log(error.message);
  }
});

// Coaches routes

// 1. Create coaches profile with a post request

// the coaches creating an account, may not be needed??

router.post('/createcoach', async function (req, res, next) {
  try {
    console.log('Creating a coach profile...');
    const profile = req.body;
    const result = await createCoachProfile(profile);
    res.json({ success: true, data: result });
    console.log('Coach profile created!');
  } catch (error) {
    console.log(error.message);
  }
});

// 2. Coaches need to receive their profiles with a GET request

// the coaches logging in??

router.get('/logincoach', async function (req, res, next) {
  try {
    console.log('Retrieving coach profile ...');
    // not sure about the next line for using firsbase, will need to check later
    const userDetails = req.query;
    //
    const result = await coachLogin(userDetails);
    res.json({ success: true, data: result });
    console.log('Recieved coach profile');
  } catch (error) {
    console.log(error.message);
  }
});
// What Freshta's team did on project week using firebase
// router.get("/:uuid", async (req, res) => {
//   const uuid = req.params.uuid;
//   console.log(uuid);
//   const data = await getDataByDate(uuid);
//   console.log(data);
//   res.json({ success: true, payload: data });
// });

// 3. POST request to send bootcamper feedback

// the coaches sending bootcampers feedback to the database

router.post('/feedback', async function (req, res, next) {
  try {
    console.log('Posting feedback ...');
    const feedback = req.body;
    const result = await postFeedback(feedback);
    res.json({ success: true, data: result });
    console.log('Feedback posted');
  } catch (err) {
    console.log(err.message);
  }
});

// 4. GET requests to view the bootcamper feedback

// request from the coaches to view all of the bootcamper data

router.get('/feedbackcoach', async function (req, res, next) {
  try {
    console.log('retrieving all of the bootcamper feedback...');
    const feedbackRequest = req.body;
    const result = await getAllFeedback(feedbackRequest);
    res.json({ success: true, data: result });
    console.log('all of the feedback retrieved');
  } catch (error) {
    console.log(error.message);
  }
});
