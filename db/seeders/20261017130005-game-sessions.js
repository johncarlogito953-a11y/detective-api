'use strict';

const startedAt = new Date('2026-10-15T09:00:00Z');
const endedAt = new Date('2026-10-15T10:30:00Z');

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('game_sessions', [
      {
        id: 1,
        session_code: '123456',
        started_at: startedAt,
        ended_at: endedAt,
        status: 'CLOSED',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('game_sessions', null, {});
  },
};
