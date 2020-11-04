const { stringify } = require('querystring');

/**
 * Note: must be performed before any requests
 * @param {superagent.agent} client AirWave REST API client
 * @param {string} username Username of AirWave user
 * @param {string} password Password of AirWave user
 * @returns {superagent.Request} Login request for AirWave REST API
 * @example
 * await loginClient(client, 'rick', 'wubba lubba dub-dub');
 */
module.exports = function loginClient(
  client,
  username = process.env.ARUBA_AIRWAVE_USERNAME,
  password = process.env.ARUBA_AIRWAVE_PASSWORD,
) {
  return client
    .post('/LOGIN')
    .send(stringify({
      destination: '/',
      credential_0: username,
      credential_1: password,
    }));
};
