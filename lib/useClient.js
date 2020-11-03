const login = require('./login');
const logout = require('./logout');

/**
 * Login, execute a function, then logout.
 * This is a convenient method, as apposed to using `login` & `logout` functions.
 * @param {superagent.Agent} client
 * @param {function} fn Function that uses `client` as its only parameter
 * @param {string} username
 * @param {string} password
 * @returns {Promise<any>} Return value of `fn`
 * @example <caption>Using `login` & `logout` functions</caption>
 * await login(client);
 *
 * const devices = await getAPList(client);
 *
 * await logout(client);
 * @example <caption>Using defaults</caption>
 * const devices = await useClient(client, getAPList);
 * @example <caption>Using explicit parameters</caption>
 * const devices = await useClient(client, getAPList, 'rick', 'wubba lubba dub-dub');
 */
module.exports = function useClient(client, fn, username, password) {
  return login(client, username, password)
    .then(() => fn(client))
    .finally(() => logout(client));
};
