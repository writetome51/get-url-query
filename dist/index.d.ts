/************
 Returns `keyValuePairs` as a GET query string, i.e.,

 getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com'});
 // -->   '?name=joe%20schmoe&email=joeschmoe@gmail.com'
 **************/
export declare function getURLQuery(keyValuePairs: Object): string;
