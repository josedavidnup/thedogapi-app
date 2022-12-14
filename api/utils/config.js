require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbApiKey: process.env.API_KEY,
};
