import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    static associate(models) {
      const { User } = models

      UserHistory.belongsTo(User, { foreignKey: 'id' })
    }
  }

  UserHistory.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    draw: DataTypes.INTEGER,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserHistory',
    timestamps: false,
  })

  return UserHistory
}