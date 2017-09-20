/**
 * 2017-9-20 sunzhiyue
 */
var ss = Object.create(null,{
    age: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 20
    },
    name: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'sun'
    }

})

console.log('-------------1--------------------------');
var dd = Object.create(ss, {})
console.log(ss.age, dd.age);
console.log(ss);
console.log('---------------2-------------------------')
Object.defineProperty(ss,'sex',{
    enumerable: false,
    writable: true,
    configurable: true,
    value: 'man'
})
console.log(ss.sex)
console.log('-------------3--------------------------');
var d = 12
Number.prototype.a = function(){
    return  1;
}
console.log(d.a());

console.log('----------4-----------------')

Object.seal(ss);
ss.age = 4;
ss.ee = '123';
console.log(ss.age,ss.ee);
Object.freeze(ss);
ss.age = 5;
console.log(ss.age);
