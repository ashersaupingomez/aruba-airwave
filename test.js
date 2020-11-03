const baretest = require('baretest');
const assert = require('assert');

const { createClient, useClient, getAPList } = require('./lib');
const { name } = require('./package');

const test = baretest(name);

test('getAPList works', async () => {
  const devices = await useClient(createClient(), getAPList);

  assert(Array.isArray(devices));
});

test.run();
