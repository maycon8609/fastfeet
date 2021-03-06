const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maycon Silva',
          email: 'maycon@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luis Silva',
          email: 'luis@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
