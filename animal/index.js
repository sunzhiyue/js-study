/**
 * 2017-9-22  sunzhiyue
 */
const dog = require('./dog');
const chicken = require('./chicken');
const dolphin = require('./dolphin');
const dove = require('./dove');
var dog1 = new dog();
console.log(dog1.r, dog1.b, dog1.le);
dog1.cd();

var chicken1 = new chicken();
console.log(chicken1.l, chicken1.m);

var dolphin1 = new dolphin();
console.log(dolphin1.s, dolphin1.w);

var dove1 = Object.create(dove.prototype,{
    name:{
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'dovee'
    },
    age:{
        enumerable: false,
        writable: true,
        configurable: true,
        value: 1
    }
})

console.log(dove1.sk, dove1.l, dove1.name);
