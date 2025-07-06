const dotenv = require('dotenv');
const { mongo } = require('mongoose');

dotenv.config()
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_CONFIG_BASE64, "base64").toString("utf8")
);
const port = process.env.PORT || 3000
const mongoDBUrl = process.env.MONGODB_URL;
const firebaseAdmin = serviceAccount;
const firebaseStroge = process.env.FIREBASE_STORAGE_BUCKET;

module.exports = {
    port, mongoDBUrl, firebaseAdmin, firebaseStroge
}