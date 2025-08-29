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
const user_google_client_id = process.env.USER_GOOGLE_CLIENT_ID;
const user_google_client_secret = process.env.USER_GOOGLE_CLIENT_SECRET;
const admin_google_client_id = process.env.ADMIN_GOOGLE_CLIENT_ID;
const admin_google_client_secret = process.env.ADMIN_GOOGLE_CLIENT_SECRET;

module.exports = {
    port, mongoDBUrl, firebaseAdmin, firebaseStroge, user_google_client_id, user_google_client_secret, admin_google_client_id, admin_google_client_secret
}