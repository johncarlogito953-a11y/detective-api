'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        school_id: '2026-0001',
        full_name: 'Alice Detective',
        email: 'alice@detective.local',
        role: 'player',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        school_id: '2026-0002',
        full_name: 'Bob Sleuth',
        email: 'bob@detective.local',
        role: 'player',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        school_id: '2026-0003',
        full_name: 'Carol Clue',
        email: 'carol@detective.local',
        role: 'player',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
