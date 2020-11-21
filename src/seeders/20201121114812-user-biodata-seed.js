module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserBiodata', [{
        id: '5594e6c6-fccd-453d-aa21-d853261fe33c',
        name: 'Pangestu Galih',
        email: 'galihhhp@gmail.com',
        gender: 'Male',
        age: '20',
        city: 'Solo',
        userId: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
      },
      {
        id: '48bc7ccc-2514-4ac7-9f6b-6be60c47fc00',
        name: 'Kolam Tai',
        email: 'kolamtai@gmail.com',
        gender: 'Male',
        age: '20',
        city: 'Jogja',
        userId: '17d8679f-b7ad-429b-9a87-d8a5925c4e32',
      },
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserBiodata', null, {});
  },
};