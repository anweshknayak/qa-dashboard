const testCase = require('../models/testcase.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Sample');
};

exports.testcase_create = function (req, res) {
    let testcase = new testCase(
        {
            testId: req.body.testId,
            description: req.body.description,
            status: req.body.status
        }
    );

    testcase.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created successfully')
    })

};

exports.testcase_details = function (req, res) {
    testCase.findById(req.params.id, function (err, test) {
        if (err) return next(err);
        res.send(test);
    })
};