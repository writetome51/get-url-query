# getURLQuery(keyValuePairs): string

Converts `keyValuePairs` to a url-escaped GET query string and returns it.

## Examples

```ts
getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com', password:'!@#^&ÅÍÔ†'});
// -->  '?name=joe%20schmoe&email=joeschmoe@gmail.com&password=!@#%5E&%C3%85%C3%8D%C3%94%E2%80%A0'

// You can un-escape the string by passing it to decodeURI():
decodeURI('?name=joe%20schmoe&email=joeschmoe@gmail.com&password=!@#%5E&%C3%85%C3%8D%C3%94%E2%80%A0');
// -->  '?name=joe schmoe&email=joeschmoe@gmail.com&password=!@#^&ÅÍÔ†'
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
