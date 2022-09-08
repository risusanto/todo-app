'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activity.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    is_done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'activity',
  });
  return activity;
};