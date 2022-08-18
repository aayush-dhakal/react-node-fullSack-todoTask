"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.hasMany(models.Subtask, { foreignKey: "todoId" });
    }
  }
  Todo.init(
    {
      todoId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: DataTypes.STRING,
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      underscored: true,
      sequelize,
      modelName: "Todo",
      tableName: "todo",
    }
  );
  return Todo;
};
