module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [{
        id: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
        username: 'galihhhp',
        password: 'galihhhp',
      },
      {
        id: '17d8679f-b7ad-429b-9a87-d8a5925c4e32',
        username: 'kolamtai',
        password: 'kolamtai',
      },
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};