const { app, router } = require('./server');
const { port } = require('./config');

require('./ideas/router')(router);
app.use('/', router);

const server = app.listen(port, () => console.log(`Express running → PORT ${server.address().port}`));

// SIGINT on Ctrl+C interruption
process.on('SIGINT', () => {
  console.info(
    'SIGINT: shutting down node app ',
    new Date().toISOString()
  );
  shutdown();
});

// SIGTERM on Docker stop
process.on('SIGTERM', () => {
  console.info(
    'SIGTERM: shutting down node app ',
    new Date().toISOString()
  );
  shutdown();
});

// Shut down server
function shutdown() {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
}