/* eslint-disable no-return-assign */
import { agent } from 'superagent';
import type { Request, SuperAgentStatic } from 'superagent';

/**
 * Request URLs are prepended with the appropriate URL base,
 * so only REST API endpoints are required.
 * @param host - Aruba AirWave IP address (typically)
 * @returns Aruba AirWave REST API client
 * @example
 * const client = createClient();
 * @example <caption>If certs hasn't been configured on Aruba AirWave</caption>
 * const client = createClient()
 *   .disableTLSCerts();
 */
export default function createClient(
  host: string = process.env.ARUBA_AIRWAVE_HOST!
): SuperAgentStatic & Request {
  return agent()
    .use((request) => request.url = `https://${host}${request.url}`);
}
