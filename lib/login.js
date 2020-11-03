const { stringify } = require('querystring');

/**
 * Login a client.
 * @param {superagent.Agent} client
 * @param {string} username
 * @param {string} password
 * @returns {Promise<superagent.Response>} Login response from AirWave REST API
 * @example <caption>Using defaults</caption>
 * const response = await login(client);
 * @example <caption>Using explicit parameters</caption>
 * const response = await login(client, 'rick', 'wubba lubba dub-dub');
 */
module.exports = function login(
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
