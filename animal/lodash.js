/**
 * 2017-9-21  sunzhiyue
 */
var _ = require('lodash');
_.chunk(['a', 's', 'd', 'f', 'g',2]);

_.chunk(['a', 'b', 'c', 'd', 'e', 'f',3]);

_.compact([2, 1, 0, false, '', 3]);

var array = [1];
var other  = _.concat(array, 2, [3], [[4]]);

console.log(other);

console.log(array);

console.log( _.difference([2, 1], [2, 2], [3, 2]));//选第一个不同的数显示出来
console.log( _.difference([2, 3, 4], [2, 3, 2]));
console.log(_.difference([2, 3, 4], [3, 4, 5]));
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));//定一个条件选一个不同的数
console.log(_.differenceBy([{'x': 2}, {'x': 1}],[{'x': 1}], 'x'));

var ob  = [{'x': 1,'y': 2}, {'x': 2, 'y': 1}];
console.log(_.differenceWith(ob, [{'x': 1, 'y': 2}],_.isEqual))//比较上边的和下面的那个不一样输出这个数组
console.log(_.drop([1, 2, 3]));//删除数组里的第一个数；
console.log(_.drop([1, 2, 3, 4],3));//从第三个开始删
console.log(_.dropRight([1, 2, 4, 5]));//从倒数第一个删
console.log(_.dropRight([1, 2, 3, 4, 5, 6],2))//从倒数第2个删；

var users = [
    {'user': 'barney', 'active': true},
    {'user': 'fred', 'active': false},
    {'user': 'peddles', 'active': false}
];
console.log(_.dropRightWhile(users,function(o){
    return !o.active;
}), '------1------');
console.log(_.dropRightWhile(users,{ 
    'user': 'pebbles', 'active': false
}), '-------2-------');
console.log(_.dropRightWhile(users, ['active',false]), '-----3----');
console.log(_.dropRightWhile(users, 'active'), '----4----');

console.log(_.flatten([1, [2, [3, [4]],5]]),[1, [2, [3, [4]],5]]);
console.log(_.flattenDeep([1, [2, [3, [4]],5]]));

var array1 = [1, 2, 3];
console.log(_.fill(array1, 'a'),array1);
console.log(_.fill(Array(4),6));//Array(有几个)，值
console.log(_.fill([4, 5, 3, 6, 7], '*', 2, 3));

var user = [
    {'user': 'ba', 'active': false},
    {'user': 'fr', 'active': false},
    {'user': 'pe', 'active': true}
];
console.log(_.findIndex(user, function(o){return o.user == 'ba';}));
console.log(_.findIndex(user,{'user': 'fr', 'active': false}));

console.log(_.head([2, 3, 4, 5]))

console.log(_.fromPairs([['a', 1], ['b', 2]]));

console.log(_.indexOf([1, 2, 3, 4],2));
console.log(_.indexOf([1, 1, 1, 4, 5, 6], 6, 5));

console.log(_.initial([1, 2, 3, 4, 5, 6, 7]))//删除最后一个

console.log(_.intersection([2, 1], [2, 3]))//输出相同的

console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }], [{ 'x': 1 }], 'x'));

var a = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
var b = [{'x':1, 'y': 1},{'x': 1, 'y': 2}];
console.log(_.intersectionWith(a, b, _.isEqual));
console.log(_.join(['a', 'b', 'c'], '~'));

var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(_.pullAll(arr, ['a', 'd'])) 
console.log(arr);
var arr2 = [1, 2, 3, 4]
var evrens = _.remove(arr2, function(n){
    return n % 2 == 0;
})
console.log(evrens)
module.exports = _;