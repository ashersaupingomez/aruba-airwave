/**
 * Note: must be performed after requests
 * @param {superagent.agent} client AirWave REST API client
 * @returns {superagent.Request} Logout request for the AirWave REST API
 * @example
 * await logoutClient(client);
 */
module.exports = function logoutClient(client) {
  return client
    .post('/LOGOUT');
};
