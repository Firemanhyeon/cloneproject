const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "user_id", 
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "user_name",
    },
    userEmail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: "user_email",
    },
    userBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "user_birth",
    },
    userHeartRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_heart_rate",
    },
    userTall: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_tall",
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "weight",
    },
    socialProvider: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "social_provider",
    },
    userDevice: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: "user_device",
    },
    userGender: {
      type: DataTypes.ENUM("MAN", "WOMAN"),
      allowNull: false,
      field: "user_gender",
    },
    membershipYn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "membership_yn",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "update_at",
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: "image_url",
    },
  },
  {
    tableName: "user", 
    timestamps: false,
  }
);

module.exports = User;
