import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      const { UserBiodata, UserHistory } = models

      User.hasOne(UserBiodata, { foreignKey: 'id' })
      User.hasOne(UserHistory, { foreignKey: 'id' })
    }
  }

  User.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  })

  return User
}