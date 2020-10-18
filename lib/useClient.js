const login = require('./login');
const logout = require('./logout');

/**
 * Login a client, execute a function on the client, then logout the client.
 * @param {superagent.Agent} client
 * @param {function} fn
 * @param {string} username
 * @param {string} password
 * @returns {any} Return value of `fn`
 * @example
 * const { createClient, useClient } = require('aruba-airwave');
 *
 * function getUserInfo(client) {
 *   return client
 *     .get('/user_info.xml');
 * }
 *
 * useClient(createClient('10.11.12.13'), getUserInfo)
 *   .then(console.log)
 *   .catch(console.error);
 */
module.exports = function useClient(client, fn, username, password) {
  return login(client, username, password)
    .then(() => fn(client))
    .finally(() => logout(client));
};
