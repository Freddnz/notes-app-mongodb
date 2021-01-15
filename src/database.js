const mongoose = require('mongoose');

const {NOTES_APP_MONGOBD_HOST, NOTES_APP_MONGOBD_DATABASE} =process.env
const MONGODB_URI = `mongodb://${NOTES_APP_MONGOBD_HOST}/${NOTES_APP_MONGOBD_DATABASE}`; 

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})  .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));