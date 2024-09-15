const app = require('./src/app');
const pool = require('./src/pool');

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: '',
  })
  .then(() => {
    app().listen(3000, () => console.log('Listening on 3000...'));
  })
  .catch(console.log);
