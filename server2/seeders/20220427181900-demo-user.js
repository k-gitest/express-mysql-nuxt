'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // ここに初期データを定義
    // テーブル名は複数名で指定する必要がある
    return queryInterface.bulkInsert('Users', [
      {name: 'Kawasaki', email: 'kawasaki@example.com', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Honda',    email: 'honda@example.com',    createdAt: new Date(), updatedAt: new Date()},
      {name: 'Yamaha',   email: 'yamaha@example.com',   createdAt: new Date(), updatedAt: new Date()},
      {name: 'Suzuki',   email: 'suzuki@example.com',   createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     // undoする際の処理を定義
     return queryInterface.bulkDelete('Users', null, {});
  }
};
