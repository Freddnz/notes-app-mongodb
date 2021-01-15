require('dotenv').config();
const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log('into to http://localhost:'+ app.get('port'));
})