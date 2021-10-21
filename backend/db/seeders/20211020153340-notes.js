"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          content: "This is the beginning of the rest of your life",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Nails, Hair, Hips, Heels",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Tell me on a Sunday, please",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Linden boulevard represent",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "This is it what, luchini pouring from the sky",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
