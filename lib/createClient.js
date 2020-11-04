const { agent } = require('superagent');
const prefix = require('superagent-prefix');

/**
 * @param {string} host IP address of AirWave
 * @returns {superagent.agent} AirWave REST API client
 * @example
 * const client = createClient('10.11.12.12');
 */
module.exports = function createClient(host = process.env.ARUBA_AIRWAVE_HOST) {
  return agent()
    .use(prefix(`https://${host}`));
};
