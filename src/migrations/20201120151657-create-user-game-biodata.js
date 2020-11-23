module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBiodata', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['Male', 'Female'],
        allowNull: true
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      userId: {
        allowNull: false,
        unique: true,
        type: Sequelize.UUID,
        onDelete: 'cascade',
        references: {
          model: 'User',
          key: 'id',
        },
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserBiodata');
  }
};