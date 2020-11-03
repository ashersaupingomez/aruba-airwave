# aruba-airwave

Superagent utilities for interacting with the Aruba AirWave REST API

## Features

-   Based on [superagent.Agent](https://visionmedia.github.io/superagent/#agents-for-global-state), a simple & robust http client class with in-built cookie handling.
-   Simple & flexible API with minimal moving parts.
-   Able to work with environment variables.
-   Super-lightweight package.

## Getting Started

```javascript
const { createClient, useClient, getAPList } = require('aruba-airwave');

const devices = await useClient(createClient(), getAPList);
```

## Testing

Tests are performed using an actual AirWave server. Be sure to include all necessary environment variables.

```bash
$ ARUBA_AIRWAVE_HOST=10.12.13.14 npm test
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [createClient](#createclient)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [login](#login)
    -   [Parameters](#parameters-1)
    -   [Examples](#examples-1)
-   [logout](#logout)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples-2)
-   [useClient](#useclient)
    -   [Parameters](#parameters-3)
    -   [Examples](#examples-3)

### createClient

Create a client.

#### Parameters

-   `host` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** AirWave IP host (optional, default `process.env.ARUBA_AIRWAVE_HOST`)

#### Examples

```javascript
const { createClient } = require('aruba-airwave');

const client = createClient('10.11.12.13');

...
```

Returns **superagent.Agent** 

### login

Login a client.

#### Parameters

-   `client` **superagent.Agent** 
-   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `process.env.ARUBA_AIRWAVE_USERNAME`)
-   `password` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `process.env.ARUBA_AIRWAVE_PASSWORD`)

#### Examples

```javascript
const { createClient, login } = require('aruba-airwave');

const client = createClient('10.11.12.13');

await login(client);

...
```

Returns **superagent.Response** 

### logout

Logout a client.

#### Parameters

-   `client` **superagent.Agent** 

#### Examples

```javascript
const { createClient, login, logout } = require('aruba-airwave');

const client = createClient('10.11.12.13');

await login(client);

...

await logout(client);
```

Returns **superagent.Response** 

### useClient

Login a client, execute a function on the client, then logout the client.

#### Parameters

-   `client` **superagent.Agent** 
-   `fn` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
-   `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `password` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### Examples

```javascript
const { createClient, useClient } = require('aruba-airwave');

function getUserInfo(client) {
  return client
    .get('/user_info.xml');
}

useClient(createClient('10.11.12.13'), getUserInfo)
  .then(console.log)
  .catch(console.error);
```

Returns **any** Return value of `fn`
