const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const ExerciseType = require("./ExerciseType");

const WorkoutRecord = sequelize.define(
  "workoutRecord",
  {
    recordId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "record_id",
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "user_id",
      references: {
        model: User,
        key: "user_id",
      },
    },
    exerciseId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "exercise_id",
      references: {
        model: ExerciseType,
        key: "exercise_id",
      },
    },
    avgHeartRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "avg_heart_rate",
    },
    highHeartRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "high_heart_rate",
    },
    recordDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: "record_date",
    },
    recordPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "record_point",
    },
    recordEnd: {
      type: DataTypes.DATE(6),
      allowNull: false,
      field: "record_end",
    },
    recordStart: {
      type: DataTypes.DATE(6),
      allowNull: false,

      field: "record_start",
    },
    intensity: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "intensity",
    },
    memo: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: "memo",
    },
  },
  {
    tableName: "workout_record",
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = WorkoutRecord;