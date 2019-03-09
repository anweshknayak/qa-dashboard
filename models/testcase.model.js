const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let testCaseSchema = new Schema({
    testId: {type: Number, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true}
});

module.exports = mongoose.model('testCase', testCaseSchema);
