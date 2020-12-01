import { stringify } from 'querystring';
import { Request, SuperAgentStatic, SuperAgentRequest } from 'superagent';

/**
 * Login a client, enabling it to make requests thereafter.
 * 
 * This needs to be called before any requests are made.
 * @private
 * @param client - Aruba AirWave REST API client
 * @param username - Aruba AirWave username
 * @param password - Aruba AirWave password
 * @example
 * await loginClient();
 */
export default function loginClient(
  client: SuperAgentStatic & Request,
  username: string = process.env.ARUBA_AIRWAVE_USERNAME!,
  password: string = process.env.ARUBA_AIRWAVE_PASSWORD!,
): SuperAgentRequest {
  return client
    .post('/LOGIN')
    .send(stringify({
      destination: '/',
      credential_0: username,
      credential_1: password,
    }));
}
