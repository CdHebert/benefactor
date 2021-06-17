const seedLists = require('./list-seeds');
const seedProducts = require('./product-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedLists();
  console.log('\n----- LISTS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  process.exit(0);
};

seedAll();
