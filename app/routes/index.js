const recordRoutes = require('./record_routes');

module.exports = function(app, db) {
  recordRoutes(app, db);
  // Other route groups could go here, in the future
};