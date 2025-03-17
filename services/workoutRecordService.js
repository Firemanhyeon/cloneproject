const WorkoutRecord = require("../models/WorkoutRecord");
const exerciseTypeService = require("../services/exerciseTypeService");
const RecordCreateRequestDto = require('../dto/requestDTO/recordCreateRequestDto');
const { validate } = require('class-validator');
const { Sequelize } = require("sequelize");
const { intensity } = require("../controllers/workoutRecordController");

const workOutRecordService = {
  createRecord: async (recordData) => {
    const errors = await validate(recordData);
    if (errors.length > 0) {
      throw new Error('기록추가 에러');
    }
    const exercise = await exerciseTypeService.findByExerciseTypeAndKorName(recordData.exerciseType, recordData.exerciseKorName);
    const exerciseId = exercise[0].dataValues.exerciseId;
      try {
        const record = await WorkoutRecord.create({
          userId: recordData.userId,
          exerciseId: exerciseId,
          exerciseType: recordData.ExerciseType,
          exerciseKorName: recordData.exerciseKorName,
          exerciseEngName: recordData.exerciseEngName,
          recordDate: recordData.recordDate,
          recordStart: recordData.recordStart,
          avgHeartRate: recordData.avgHeartRate,
          highHeartRate: recordData.highHeartRate,
          memo: recordData.memo,
          recordPoint: 10,
          recordEnd: recordData.recordStart,
          intensity: "LOW",
        });
        console.log('result',record);
        return record;
      } catch (err) {
        throw new Error("DB 에러" + err.message);
      }
  },

  updateRecord: async (updateData) => {
    try {
      const [affectRows, updatedRecords] = await WorkoutRecord.update(updateData,{
        where: {
          recordId: updateData.recordId,
        },
        returning: true,
      });
      if (affectRows === 0) {
        throw new Error("해당 기록을 찾을 수 없습니다.");
      }
      return 'success';  
    } catch (err) {
      throw new Error('DB Error' + err.message);
    }
  }
}

module.exports = workOutRecordService;