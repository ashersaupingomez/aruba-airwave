const { agent } = require('superagent');
const prefix = require('superagent-prefix');

module.exports = function createClient(host = process.env.ARUBA_AIRWAVE_HOST) {
  return agent()
    .use(prefix(`https://${host}`));
};
