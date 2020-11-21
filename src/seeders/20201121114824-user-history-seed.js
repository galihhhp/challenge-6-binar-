module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserHistory', [{
        id: '7bea761d-dec9-4150-aa75-ffeeaf4605b2',
        win: '8',
        lose: '2',
        draw: '6',
        userId: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
      },
      {
        id: '33fabd06-e259-4fef-a717-a2e7f3e1d27a',
        win: '4',
        lose: '1',
        draw: '5',
        userId: '17d8679f-b7ad-429b-9a87-d8a5925c4e32',
      },
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserHistory', null, {});
  },
};