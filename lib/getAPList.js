const { parse } = require('fast-xml-parser');

/**
 * Get the all devices listed on AirWave
 * @param {superagent.Agent} client
 * @returns {Promise<array<object>>}
 * @example
 * const devices = await getAPList(client);
 */
module.exports = function getAPList(client) {
  return client
    .get('/ap_list.xml')
    .then(({ text }) => parse(text))
    .then((data) => data['amp:amp_ap_list'].ap);
};
