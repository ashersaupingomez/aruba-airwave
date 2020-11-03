/**
 * Logout a client.
 * @param {superagent.Agent} client
 * @returns {Promise<superagent.Response>}
 * @example
 * const response = await logout(client);
 */
module.exports = function logout(client) {
  return client
    .post('/LOGOUT');
};
