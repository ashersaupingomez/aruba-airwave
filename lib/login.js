const { stringify } = require('querystring');

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
