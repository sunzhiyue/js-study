/**
 * 2017-9-19   sunzhiyue
 */
var person = {
    age: 1
};

var a = Object.create(person,{
    age:{
        value: 32
    } 
});
console.log(a.__proto__);
person.ab = function(){
    return 2;
}
var b = Object.create(person, {})
console.log(a.age, b.age);
console.log(person.ab())

console.log('#############################')
var arr = [1, 2, 3, 4, 5]
console.log(typeof arr);
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__ === Object.prototype)
console.log(arr.__proto__, arr.__proto__.__proto__.__proto__, arr.__proto__.constructor)
console.log(Object.constructor)
console.log(Array.prototype === arr.__proto__)
console.log('******************************')
var str = 'sun';
console.log(typeof str);
console.log(str.__proto__, str.__proto__.constructor, str.__proto__.__proto__);
console.log(arr.prototype === str.prototype);
console.log(str.__proto__ === String.prototype)
console.log(String.prototype === str.__proto__)
console.log(Object.prototype === str.__proto__.__proto__)
console.log('----------------------')

var d = 12;
console.log(typeof d);
console.log(d.__proto__, d.__proto__.__proto__)
console.log(d.__proto__.constructor)
console.log(Number.prototype === d.__proto__)
console.log(Object.prototype === d.__proto__.__proto__)
console.log('=============================')


var f = 2 > 1;
console.log(typeof f);
console.log(f.__proto__, f.__proto__.__proto__, f.__proto__.__proto__.__proto__)
console.log(f.__proto__.constructor);
console.log(Boolean.prototype === f.__proto__)
console.log(Object.prototype === f.__proto__.__proto__)
console.log(Object.prototype, Object.prototype.__proto__, Object.__proto__, Object.__proto__.prototype)