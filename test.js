const baretest = require('baretest');
const assert = require('assert');

const { createClient, useClient } = require('./lib');
const { name } = require('./package');

const test = baretest(name);

function getUserInfo(client) {
  return client
    .get('/user_info.xml');
}

const client = createClient();

test('login, execute a function, then logout', async () => {
  const { ok } = await useClient(client, getUserInfo);

  assert.ok(ok);
});

test('fails to execute a function after logout', () => {
  assert.rejects(() => getUserInfo(client));
});

test.run();
