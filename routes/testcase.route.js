const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const testcase_controller = require('../controller/testcase.controller');

router.get('/test', testcase_controller.test);
router.post('/create', testcase_controller.testcase_create);
router.get('/:id', testcase_controller.testcase_details);

module.exports = router;