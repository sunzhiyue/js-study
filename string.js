/**
 * 2017-9-17    sunzhiyue
 */
var str = '    hello world 1     ';
//var str = ''
console.log(str.charAt(0));
console.log(str.charAt(-4));
console.log(str.charAt(14));
console.log(str.charAt(7));
console.log(str.concat(' how are you'));
console.log(str.concat(' '));

console.log('-------------------')
console.log(str.includes('hello'));
console.log(str.includes('no'));
console.log(str.includes('hello', 1));
console.log(str.includes('hello 1', -1));
console.log(str.includes(''))
console.log('-----------------------')

console.log(str.endsWith('1'))
console.log(str.endsWith('hello', 5))
console.log(str.endsWith('2'))
console.log(str.endsWith('hello', -1))
console.log(str.endsWith(''))
console.log('------------------------');

console.log(str.indexOf('world'))
console.log(str.indexOf('worldo'));
console.log(str.indexOf('8'))
console.log(str.indexOf('9'))
console.log(str.indexOf('world', 8));
console.log(str.indexOf('world', -7));
console.log(str.indexOf('world', 0))
console.log(str.indexOf(''))
console.log('----------------------');

console.log(str.lastIndexOf('e'))
console.log(str.lastIndexOf('q'))
console.log(str.lastIndexOf('e', -1))
console.log(str.lastIndexOf('e', 23))
console.log(str.lastIndexOf('e', 0))
console.log(str.lastIndexOf('o', 0))
console.log(str.lastIndexOf('o', 8))
console.log('---------------------')

console.log(str.padEnd(1, 'hello'))
console.log(str.padEnd(-1, 'hello'))
console.log(str.padEnd(18, 'hello'))
console.log(str.padEnd(30, 'hello'))
console.log(str.padEnd(100, 'hello'))
console.log('---------------------')

console.log(str.padStart(20, '11'));
console.log(str.padStart(1, '1'))
console.log(str.padStart(-1, '11'))
console.log('---------------------')

console.log(str.repeat(3))
console.log(str.repeat(0))
console.log(str.repeat(2.5))
console.log(str.repeat(3 / 4))
console.log(str.repeat(3 * 3))
console.log('---------------------')

console.log(str.slice(1, 4));
console.log(str.slice(9, -2));
console.log(str.slice(0));
console.log(str.slice(-1));
console.log(str.slice(30));
console.log(str.slice(10)); 
console.log(str.slice(-1, 10)); 
console.log('---------------------')

console.log(str.split('o', 4));  //数字是切几段
console.log(str.split('o', -1));  //负数无意义
console.log(str.split('o', 1));
console.log(str.split('o', 2));
console.log(str.split('llo', 4));
console.log('---------------------')

console.log(str.startsWith('hello'));
console.log(str.startsWith('w', 2));
console.log(str.startsWith('e', 1));
console.log(str.startsWith('h', -1));//负数默认为0
console.log(str.startsWith('w', -1));
console.log('---------------------')

console.log(str.substr(2));
console.log(str.substr(20));//超了不显示
console.log(str.substr(-3, -2));
console.log(str.substr(-3, 5));
console.log(str.substr(-3, 5));
console.log(str.substr(3, -2))//长度负数为空
console.log(str.substr(3, 5));
console.log('---------------------')

console.log(str.trim());
console.log(str.trimLeft());
console.log(str.trimRight());
