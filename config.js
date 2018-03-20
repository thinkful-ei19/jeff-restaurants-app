'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://dev:dev@ds053176.mlab.com:53176/jeff-restaurants-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;