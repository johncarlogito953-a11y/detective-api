'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('questions', [
      {
        id: 1,
        text: 'What is the first clue found at the crime scene?',
        answer: 'A broken window',
        points: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        text: 'Who was seen near the library at 8 PM?',
        answer: 'The night guard',
        points: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        text: 'What item was missing from the desk?',
        answer: 'The master key',
        points: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('questions', null, {});
  },
};
