const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://iwsmavericks:iws@ds123896.mlab.com:23896/socialacademicportal'; // Databse URI and database name
  process.env.databaseName = 'production database: socialacademicportal'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/socialacademicportal'; // Databse URI and database name
  process.env.databaseName = 'development database: socialacademicportal'; // Database name
}
