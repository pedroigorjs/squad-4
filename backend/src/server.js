require('dotenv/config');
const { server } = require('./app');

server.listen(3333, () => {
  console.log('Server is running at http://localhost:3333');
  console.log('To stop it press CTRL + C');
});
