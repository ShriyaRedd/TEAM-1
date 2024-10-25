const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    description: String,
});

module.exports = mongoose.model('Course', CourseSchema);
