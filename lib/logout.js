/**
 * Logout a client.
 * @param {superagent.Agent} client
 * @returns {superagent.Response}
 * @example
 * const { createClient, login, logout } = require('aruba-airwave');
 *
 * const client = createClient('10.11.12.13');
 *
 * await login(client);
 *
 * ...
 *
 * await logout(client);
 */
module.exports = function logout(client) {
  return client
    .post('/LOGOUT');
};
