const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExerciseType = sequelize.define(
    "ExerciseType",
    {
        exerciseId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            field: "exercise_id",
        },
        exerciseColor: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: "exercise_color",
        },
        exerciseEngName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: "exerciseEngName",
        },
        exerciseKorName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: "exerciseKorName",
        },
        exerciseImg: {
            type: DataTypes.STRING(100),
            allowNull: true,
            field: "exercise_img",
        },
        exerciseType: {
            type: DataTypes.ENUM("CARDIO","STRENGTH"),
            allowNull: false,
            field: "exercise_type"
        }
    },
    {
        tableName: "exercise_type",
        timestamps: false
    }
);
module.exports = ExerciseType;