# aruba-airwave

Superagent utilities for interacting with the Aruba AirWave REST API

## Features

-   Based on [superagent.Agent](https://visionmedia.github.io/superagent/#agents-for-global-state), a simple & robust http client class with in-built cookie handling.
-   Simple & flexible API with minimal moving parts.
-   Able to work with environment variables, by default.
-   Super-lightweight package.

## Getting Started

```javascript
import { useClient } from 'aruba-airwave';

function requestGetUserInfo(client) {
  return client
    .get('/user_info.xml');
}

const userInfo = await useClient(requestGetUserInfo);
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [createClient](#createclient)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [useClient](#useclient)
    -   [Parameters](#parameters-1)
    -   [Examples](#examples-1)

### createClient

Request URLs are prepended with the appropriate URL base,
so only REST API endpoints are required.

#### Parameters

-   `host` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Aruba AirWave IP address (typically) (optional, default `process.env.ARUBA_AIRWAVE_HOST!`)

#### Examples

```javascript
const client = createClient();
```

If certs hasn't been configured on Aruba AirWave


```javascript
const client = createClient()
  .disableTLSCerts();
```

Returns **any** Aruba AirWave REST API client

### useClient

#### Parameters

-   `fn` **function (client: any): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;T>** Function whose only parameter is `client`
-   `client` **any** Aruba AirWave REST API client (optional, default `createClient()`)
-   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Aruba AirWave username (optional, default `process.env.ARUBA_AIRWAVE_USERNAME!`)
-   `password` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Aruba AirWave password (optional, default `process.env.ARUBA_AIRWAVE_PASSWORD!`)

#### Examples

First, define a function which accepts & uses the `client` paramter


```javascript
function requestGetUserInfo(client) {
  return client
    .get('/user_info.xml');
}
```

Then, use the `useClient` function which returns the resolved value of `fn`


```javascript
const response = await useClient(requestGetUserInfo);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;T>** Promise that resolves to the return value of `fn`

## Testing

Tests are performed on an actual Aruba AirWave server whose credentials are defined by environment variables.
These can be fed either via the command line or a `.env` file at the root of this package.

```bash
$ npm test
```
