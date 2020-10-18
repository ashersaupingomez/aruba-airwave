const { stringify } = require('querystring');

/**
 * Login a client.
 * @param {superagent.Agent} client
 * @param {string} username
 * @param {string} password
 * @returns {superagent.Response}
 * @example
 * const { createClient, login } = require('aruba-airwave');
 *
 * const client = createClient('10.11.12.13');
 *
 * await login(client);
 *
 * ...
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
