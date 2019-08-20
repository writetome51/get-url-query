"use strict";
/************
 Returns `keyValuePairs` as a URI-encoded GET query string.  Example:

 getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com'});
 // -->   '?name=joe%20schmoe&email=joeschmoe@gmail.com'
 **************/
Object.defineProperty(exports, "__esModule", { value: true });
function getURLQuery(keyValuePairs) {
    if (Object.keys(keyValuePairs).length === 0)
        return '';
    var copy = Object.create(keyValuePairs);
    // encode each value:
    for (var key in copy)
        copy[key] = encodeURIComponent(copy[key]);
    var getQuery = '?';
    for (var key in copy)
        getQuery += (key + '=' + copy[key] + '&');
    return getQuery.slice(0, -1); // removes the trailing '&' .
}
exports.getURLQuery = getURLQuery;
/****************
 Performs the reverse of getURLQuery().
 Decodes urlQuery and returns it as an object of key-value pairs.

 ***************/
function getObjectFromURLQuery(urlQuery) {
    urlQuery = urlQuery.split('?').join('');
    var parts = urlQuery.split('&');
    var obj = {};
    parts.forEach(function (part) {
        var _a = part.split('='), key = _a[0], value = _a[1];
        obj[key] = decodeURIComponent(value);
    });
    return obj;
}
exports.getObjectFromURLQuery = getObjectFromURLQuery;
