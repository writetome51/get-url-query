import { getObjectFromURLQuery, getURLQuery } from './index.js';

let a = 22;
let k = 1;

let result = getURLQuery({ a, k });
console.log(result);

a = ' &%*()-_&';
k = '&  !';
result = getURLQuery({ k, a });
console.log(result);

let obj = getObjectFromURLQuery(result);
console.log(obj);

obj = { k: '&  !', a: ' &%*()-_&' };
let urlQuery = getURLQuery({ name: 'joe schmoe?', email: 'jschmoe?@gmail.com', password: '?&ÅÍ†' });
console.log(urlQuery);

// urlQuery is '?name=joe%20schmoe&email=jschmoe%40gmail.com&password=%26%C3%85%C3%8D%E2%80%A0'
// You can decode the information by passing it to getObjectFromURLQuery():
result = getObjectFromURLQuery(urlQuery);
// -->  { name: 'joe schmoe?', email: 'jschmoe?@gmail.com', password: '?&ÅÍ†' }
console.log(result);


obj = {'$?__': '$$'};
result = getURLQuery(obj);
console.log(result);

result = getObjectFromURLQuery(result);
console.log(result);
