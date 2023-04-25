const { Router } = require('express');
const { cutExcelFor1000Rows } = require('../controllers/excel');

const router = Router();


router.get( '/', cutExcelFor1000Rows );



module.exports = router;