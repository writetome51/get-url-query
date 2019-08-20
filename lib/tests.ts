import { getObjectFromURLQuery, getURLQuery } from '../dist';


let a: any = 22;
let k: any = 1;
let result: any = getURLQuery('a');
console.log(result);


a = ' &%*()-_&';
k = '&  !';
result = getURLQuery({k, a});
console.log(result);

let obj: {k:string,a:string} = getObjectFromURLQuery(result);
console.log(obj);

obj = {k: '&  !', a: ' &%*()-_&'};
