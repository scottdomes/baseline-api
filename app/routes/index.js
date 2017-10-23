const recordRoutes = require('./record_routes');
const tagRoutes = require('./tag_routes');

module.exports = function(app, db) {
  recordRoutes(app, db);
  tagRoutes(app, db);
  // Other route groups could go here, in the future
};