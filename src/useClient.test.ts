/* eslint-disable import/no-extraneous-dependencies */
import baretest from 'baretest';
import { doesNotReject } from 'assert';
import type { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

import createClient from './createClient';
import useClient from './useClient';

const test = baretest('aruba-airwave');

/**
 * @private
 * @param client - Aruba AirWave REST API client
 * @returns Request for Aruba AirWave to get current user info
 */
function requestGetUserInfo(client: SuperAgentStatic & Request): SuperAgentRequest {
  return client
    .get('/user_info.xml');
}

/**
 * Disable TLS cert checks, for simplicit's sake
 * @private
 * @returns Aruba AirWave REST API client
 */
const client: SuperAgentStatic & Request = createClient()
  .disableTLSCerts();

/**
 * Note: a `.env` file is required at the root of this package for tests to work.
 *
 * `useClient` relies on the other 3 functions to work correctly.
 * Therefore, if it is working correctly, the others are also.
 *
 * This test resolves if a `200` HTTP status code is received from Aruba AirWave.
 * Otherwise, the promise rejects.
 * @private
 */
test('everything works', () => doesNotReject(useClient(requestGetUserInfo, client)));

test.run();
