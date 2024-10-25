const express = require('express');
const Course = require('../models/Course');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/recommend', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('skills');
        const userSkills = user.skills.map(skill => skill._id);
        const courses = await Course.find({ skills: { $in: userSkills } }).populate('skills');
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
