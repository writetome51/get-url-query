"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("../dist");
var a = 22;
var k = 1;
var result = dist_1.getURLQuery({ a: a, k: k });
console.log(result);
a = ' &%*()-_&';
k = '&  !';
result = dist_1.getURLQuery({ k: k, a: a });
console.log(result);
var obj = dist_1.getObjectFromURLQuery(result);
console.log(obj);
obj = { k: '&  !', a: ' &%*()-_&' };
var urlQuery = dist_1.getURLQuery({ name: 'joe schmoe?', email: 'jschmoe?@gmail.com', password: '?&ÅÍ†' });
console.log(urlQuery);
// urlQuery is '?name=joe%20schmoe&email=jschmoe%40gmail.com&password=%26%C3%85%C3%8D%E2%80%A0'
// You can decode the information by passing it to getObjectFromURLQuery():
result = dist_1.getObjectFromURLQuery(urlQuery);
// -->  { name: 'joe schmoe', email: 'jschmoe@gmail.com', password: '&ÅÍ†' }
console.log(result);
