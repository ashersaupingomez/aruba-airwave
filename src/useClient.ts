import type { Request, SuperAgentStatic } from 'superagent';

import createClient from './createClient';
import loginClient from './loginClient';
import logoutClient from './logoutClient';

/**
 * @param fn - Function whose only parameter is `client`
 * @param client - Aruba AirWave REST API client
 * @param username - Aruba AirWave username
 * @param password - Aruba AirWave password
 * @returns Promise that resolves to the return value of `fn`
 * @example <caption>First, define a function which accepts & uses the `client` paramter</caption>
 * function requestGetUserInfo(client) {
 *   return client
 *     .get('/user_info.xml');
 * }
 * @example <caption>Then, use the `useClient` function which returns the resolved value of `fn`</caption>
 * const response = await useClient(requestGetUserInfo);
 */
export default function useClient(
  fn: (client: SuperAgentStatic & Request) => any,
  client: SuperAgentStatic & Request = createClient(),
  username: string = process.env.ARUBA_AIRWAVE_USERNAME!,
  password: string = process.env.ARUBA_AIRWAVE_PASSWORD!,
): Promise<any> {
  return loginClient(client, username, password)
    .then(() => fn(client))
    .finally(() => logoutClient(client));
}
