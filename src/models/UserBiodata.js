import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    static associate(models) {
      const { User } = models

      UserBiodata.belongsTo(User, { foreignKey: 'userId' })
    }
  }

  UserBiodata.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['Male', 'Female'],
    },
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserBiodata',
    timestamps: false,
  })

  return UserBiodata
}