'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('seats', [
      {
        id: 1,
        game_session_id: 1,
        user_id: 1,
        nickname: 'Detective Alice',
        score: 85,
        completed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        game_session_id: 1,
        user_id: 2,
        nickname: 'Detective Bob',
        score: 92,
        completed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        game_session_id: 1,
        user_id: 3,
        nickname: 'Detective Carol',
        score: 78,
        completed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('seats', null, {});
  },
};
