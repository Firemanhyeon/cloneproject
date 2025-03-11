const ExerciseType = require("../models/ExerciseType");

const exerciseTypeService = {
  findByExerciseTypeAndKorName: async (exerciseType, exerciseKorName) => {
    const exercise = await ExerciseType.findAll({
      where: {
        exerciseType: exerciseType,
        exerciseKorName: exerciseKorName,
      },
    });
    if (exercise) {
        return exercise;    
    }
        return null;
  },
};
module.exports = exerciseTypeService;
