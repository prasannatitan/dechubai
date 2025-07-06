var admin = require("firebase-admin");

var {firebaseAdmin, firebaseStroge } = require("./config");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(firebaseAdmin),
  storageBucket: firebaseStroge
});

const bucket = admin.storage().bucket();
const auth = {
  auth: firebase.auth()
};
module.exports = {bucket, auth}

