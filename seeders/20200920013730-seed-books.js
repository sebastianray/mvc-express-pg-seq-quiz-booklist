'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const parseData = JSON.parse(fs.readFileSync('./books.json'));
   const booksData =[];
   parseData.forEach(data => {
     const { title, author, releasedDate, pages, genre } = data;
     booksData.push({
       title,
       author,
       releasedDate,
       pages,
       genre,
       createdAt : new Date(),
       updatedAt : new Date()
     })
  })
    await queryInterface.bulkInsert('Books', booksData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  }
};

