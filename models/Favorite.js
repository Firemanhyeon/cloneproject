const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const ExerciseType = require("./ExerciseType");

const Favorite = sequelize.define(
  "Favorite",
  {
    favoriteId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "favorite_id",
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
  },
  {
    tableName: "favorite",
    timestamps: true,
  },
);

module.exports = Favorite;