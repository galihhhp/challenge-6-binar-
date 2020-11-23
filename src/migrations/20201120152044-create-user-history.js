module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('UserHistory', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      win: {
        type: Sequelize.INTEGER
      },
      lose: {
        type: Sequelize.INTEGER
      },
      draw: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: true,
        unique: true,
        onDelete: 'cascade',
        references: {
          model: 'User',
          key: 'id',
        },
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserHistory');
  }
};