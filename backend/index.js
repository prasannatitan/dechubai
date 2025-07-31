const express = require('express');
const mongoose = require('mongoose');
const { port, mongoDBUrl } = require('./config/config');
const imageRoutes = require('./routes/imageRoutes');
const taskRoutes = require('./AdminRoutes/taskRoutes')
const fileFolderRoutes = require('./routes/filefolder');
const taskPageRoutes = require('./AdminRoutes/taskPageRoutes')
const projectData = require('./routes/projectData');
const taskRequest = require('./routes/taskrequest');
const cors = require('cors');
const app = express();
const gsheet = require('./routes/gSheet');

// const allowedOrigins = [
//   "https://www.dechub.ai",
//   "https://admin.dechub.ai"
// ];

// app.use(cors({
//   origin: allowedOrigins, 
//   credentials: true 
// }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', imageRoutes);
app.use('/files', fileFolderRoutes);
app.use('/api', gsheet);
app.use('/task', taskRoutes);
app.use('/taskreq', taskRequest);
app.use('/project', taskPageRoutes);
app.use('/api', projectData)

mongoose.connect(mongoDBUrl)
    .then(() => {
        app.listen(port, () => {
            console.log(`server is runiiing ${port}`);
        })
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.log(err);
    });