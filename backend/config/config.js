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
const google_client_id = process.env.GOOGLE_CLIENT_ID;
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET;

module.exports = {
    port, mongoDBUrl, firebaseAdmin, firebaseStroge, google_client_id, google_client_secret
}