// @ts-ignore
const getObjectCopy = require("copy-object");


/************
 Returns `keyValuePairs` as a URI-encoded GET query string.  Example:

 getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com'});
 // -->   '?name=joe%20schmoe&email=joeschmoe@gmail.com'
 **************/

export function getURLQuery(keyValuePairs): string {
	if (Object.keys(keyValuePairs).length === 0) return '';
	let copy = getObjectCopy(keyValuePairs);

	// encode each value:
	for (let key in copy) copy[key] = encodeURIComponent(copy[key]);

	let getQuery = '?';
	for (let key in copy) getQuery += (key + '=' + copy[key] + '&');
	return getQuery.slice(0, -1); // removes the trailing '&' .
}


/****************
 Performs the reverse of getURLQuery().
 Decodes `urlQuery` and returns it as an object of key-value pairs.
 The function assumes that any '?' and '&' in `urlQuery` are special
 reserved characters that are not part of the parameters' values.
 ***************/

export function getObjectFromURLQuery(urlQuery: string): any {
	urlQuery = urlQuery.split('?').join('');
	let parts = urlQuery.split('&');
	let obj = {};

	parts.forEach((part) => {
		let [key, value] = part.split('=');
		obj[key] = decodeURIComponent(value);
	});
	return obj;
}
