"use strict";
/************
 Returns `keyValuePairs` as a GET query string, i.e.,

 getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com'});
 // -->   '?name=joe%20schmoe&email=joeschmoe@gmail.com'
 **************/
Object.defineProperty(exports, "__esModule", { value: true });
function getURLQuery(keyValuePairs) {
    if (Object.keys(keyValuePairs).length === 0)
        return '';
    var getQuery = '?';
    for (var key in keyValuePairs)
        getQuery += (key + '=' + keyValuePairs[key] + '&');
    getQuery = getQuery.slice(0, -1); // removes the trailing '&' .
    return encodeURI(getQuery);
}
exports.getURLQuery = getURLQuery;
