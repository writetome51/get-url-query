/************
 Returns `keyValuePairs` as a URI-encoded GET query string.  Example:

 getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com'});
 // -->   '?name=joe%20schmoe&email=joeschmoe@gmail.com'
 **************/

export declare function getURLQuery(keyValuePairs: object): string;


/****************
 Performs the reverse of getURLQuery().
 Decodes urlQuery and returns it as an object of key-value pairs.
 ***************/

export declare function getObjectFromURLQuery(urlQuery: string): object;
