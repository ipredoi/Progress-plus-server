// Import Firebase Admin initialized instance to middleware
var firebase = require('firebase-admin');
var serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

//prettier-ignore
const firebaseApp = firebase.initializeApp({
  credential: firebase.credential.cert({
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.databaseURL,
});

const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      console.log({ firebaseApp });
      const userInfo = await firebaseApp.auth().verifyIdToken(authToken);
      console.log('hello');
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      console.log(e);
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request' });
    }
  });
};

module.exports = { checkIfAuthenticated };
