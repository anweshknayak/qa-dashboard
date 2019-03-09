const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const testcase_controller = require('../controller/testcase.controller');

router.get('/test', testcase_controller.test);
module.exports = router;