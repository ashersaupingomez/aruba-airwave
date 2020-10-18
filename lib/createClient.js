const { agent } = require('superagent');
const prefix = require('superagent-prefix');

/**
 * Create a client.
 * @param {string} host AirWave IP host
 * @returns {superagent.Agent}
 * @example
 * const { createClient } = require('aruba-airwave');
 *
 * const client = createClient('10.11.12.13');
 *
 * ...
 */
module.exports = function createClient(host = process.env.ARUBA_AIRWAVE_HOST) {
  return agent()
    .use(prefix(`https://${host}`));
};
