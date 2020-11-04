const baretest = require('baretest');
const assert = require('assert');
const { agent, Response } = require('superagent');

const { name } = require('./package');
const {
  createClient,
  loginClient,
  logoutClient,
  useClient,
} = require('./lib');

const test = baretest(name);

function getUserInfo(client) {
  return client
    .get('/user_info.xml')
    .then(({ text }) => text);
}

const client = createClient();

test('createClient', () => assert(client instanceof agent));

test('loginClient', () => loginClient(client)
  .then((response) => assert(response instanceof Response)));

test('logoutClient', () => logoutClient(client)
  .then((response) => assert(response instanceof Response)));

test('useClient', () => useClient(client, getUserInfo)
  .then((platformName) => assert(typeof platformName === 'string')));

test.run();
