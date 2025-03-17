var express = require("express");
var router = express.Router();
const workoutRecordController = require("../controllers/workoutRecordController");


// router.get('/', workoutRecordController.getRecords);
router.post('/', workoutRecordController.createRecord);
router.put('/', workoutRecordController.updateRecord);
router.delete('/', workoutRecordController.deleteRecord);
router.get('/:recordId', workoutRecordController.detailRecord);
router.get('/week', workoutRecordController.weekRecord);
router.get('/intensity', workoutRecordController.intensity);
router.get('/firstWorkout', workoutRecordController.firstRecord);
router.get('/count', workoutRecordController.count);
module.exports = router;