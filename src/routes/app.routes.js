const {Router} = require('express');
const router = Router();
const {renderIndex,renderAbout } = require('../controllers/app.controllers')

router.get('/',renderIndex );

router.get('/about',renderAbout);

module.exports = router;