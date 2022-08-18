"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subtask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subtask.belongsTo(models.Todo, {
        foreignKey: "todoId",
      });
    }
  }
  Subtask.init(
    {
      subtaskId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      todoId: DataTypes.STRING,
      title: DataTypes.STRING,
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      underscored: true,
      sequelize,
      modelName: "Subtask",
      tableName: "subtask",
    }
  );
  return Subtask;
};
