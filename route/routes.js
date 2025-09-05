//ami express theke router k anlam;
const router = require('express').Router();
const { getAllDataController, toGoBlogController, toGoLoginController } = require('../controller/controllers');


router.get('/',getAllDataController);
router.get('/blog',toGoBlogController);
router.get('/login',toGoLoginController);
module.exports=router;