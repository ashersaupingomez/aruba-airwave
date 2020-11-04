const loginClient = require('./loginClient');
const logoutClient = require('./logoutClient');

/**
 * Login a client, execute a function using the client, then logout the client,
 * returning the value of the function.
 *
 * This is a simpler method than explicitly using `loginClient` & `logoutClient`,
 * which is the typical workflow.
 * @param {superagent.agent} client AirWave REST API client
 * @param {function} fn Function which only accepts `client` parameter
 * @param {string} username Username of AirWave user
 * @param {string} password Password of AirWave user
 * @example <caption>Define a function:</caption>
 * function getUserInfo(client) {
 *   return client
 *     .get('/user_info.xml')
 *     .then(({ text }) => text);
 * }
 * @example <caption>Pass `client` & the function into `useClient`:</caption>
 * const userInfo = await useClient(client, getUserInfo, 'rick', 'wubba lubba dub-dub');
 * @example <caption>This is equivalent to:</caption>
 * await loginClient(client, 'rick', 'wubba lubba dub-dub');
 *
 * const userInfo = await getUserInfo(client);
 *
 * await logoutClient(client);
 */
module.exports = function useClient(client, fn, username, password) {
  return loginClient(client, username, password)
    .then(() => fn(client))
    .finally(() => logoutClient(client));
};
