/**
 * 2017-9-19 sunzhiyue
 */
console.log(`typeof Function -> ${typeof Function}`);
console.log(`typeof Object -> ${typeof Object}`);
console.log(`typeof Function.prototype -> ${typeof Function.prototype}`);
console.log(`typeof Object.prototype -> ${typeof Object.prototype}`);
console.log(`typeof Object.proto -> ${ Object.__proto__}`);
console.log(` Function.proto === Object.proto -> ${ Function.__proto__ === Object.__proto__}`);
console.log(` Function.prototype === Object.prototype -> ${ Function.prototype === Object.prototype}`);
console.log(` Object.prototype === function.proto -> ${ Function.__proto__ === Object.prototype}`);
console.log(` function.prototype === function.proto -> ${ Function.__proto__ === Function.prototype}`);
console.log(` function.prototype.prototype -> ${ Function.prototype.prototype}`);
console.log(` function.prototype.proto -> ${ Function.prototype.__proto__}`);
console.log(` Object.prototype.proto -> ${ Object.prototype.__proto__}`);
console.log(Object.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === null);

var car = function(){
    age : 1
    
};
console.log(typeof car);
console.log(typeof car.prototype);
console.log(typeof car.__proto__);
console.log(car.prototype === car.__proto__ );
console.log(car.__proto__ === Function.prototype);
console.log(car.prototype.__proto__ === Function.prototype.__proto__)

var han = new car()
console.log(typeof han)
console.log(typeof han.__proto__)
console.log(typeof han.prototype)

