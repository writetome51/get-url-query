# getURLQuery(keyValuePairs): string

Converts `keyValuePairs` to a URI-encoded query string and returns it.

# getObjectFromURLQuery(urlQuery): Object

Performs the reverse of `getURLQuery()`.  
Decodes `urlQuery` and returns it as an object of key-value pairs.


## Examples

```ts
let urlQuery = getURLQuery(
	{name:'joe schmoe', email:'jschmoe@gmail.com', password:'&ÅÍ†'}
);
// urlQuery is '?name=joe%20schmoe&email=jschmoe%40gmail.com&password=%26%C3%85%C3%8D%E2%80%A0'

// You can decode the information by passing it to getObjectFromURLQuery():
getObjectFromURLQuery(urlQuery);
// -->  { name: 'joe schmoe', email: 'jschmoe@gmail.com', password: '&ÅÍ†' }
```

## Installation

```bash
npm i  @writetome51/get-url-query
```

## Loading
```ts
// If using TypeScript:
import {getURLQuery} from '@writetome51/get-url-query';
// If using ES5 JavaScript:
var getURLQuery = require('@writetome51/get-url-query').getURLQuery;
```
