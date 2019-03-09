const testCase = require('../models/testcase.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Sample');
};