# getURLQuery(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keyValuePairs: object<br>): string

Converts `keyValuePairs` to a URI-encoded query string and returns it.

# getObjectFromURLQuery(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;urlQuery: string<br>): object

Performs the reverse of `getURLQuery()`.  
Decodes `urlQuery` and returns it as an object of key-value pairs.


## Examples
```js
let urlQuery = getURLQuery(
	{name:'joe schmoe', email:'jschmoe@gmail.com', password:'&ÅÍ†'}
);
// urlQuery === '?name=joe%20schmoe&email=jschmoe%40gmail.com&password=%26%C3%85%C3%8D%E2%80%A0'

// You can decode the information by passing it to getObjectFromURLQuery():
getObjectFromURLQuery(urlQuery);
// -->  { name: 'joe schmoe', email: 'jschmoe@gmail.com', password: '&ÅÍ†' }
```

## Installation
```bash
npm i  @writetome51/get-url-query
```

## Loading
```js
import {getURLQuery, getObjectFromURLQuery} from '@writetome51/get-url-query';
```
