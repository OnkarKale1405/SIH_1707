const express = require('express');
const Attendance = require('../models/Attendance');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const attendance = new Attendance({
      user: req.user.userId,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    });
    await attendance.save();
    res.status(201).json({ message: 'Attendance recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error recording attendance' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find({ user: req.user.userId })
      .sort('-timestamp')
      .populate('user', 'name');
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching attendance records' });
  }
});

// Admin route to get all attendance records
router.get('/all', auth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  try {
    const attendanceRecords = await Attendance.find()
      .sort('-timestamp')
      .populate('user', 'name');
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching attendance records' });
  }
});

module.exports = router;