/**
 * 2017-9-19   sunzhiyue
 */
var person = function(age){
    this.age = age + 1;
};
var sun = new person(30);
var yue = new person(20);
person.prototype.getAge = function () {
    return this.age;
};
console.log(sun.getAge(),yue.getAge());
sun.getNow = function(){
    return 1;
};
yue.getQw = function(){
    return 2;
};
sun.getNow();
//sun.getQw();
console.log(typeof sun.getAge.prototype)
console.log(person.__proto__ === Function.prototype);
console.log(sun.getNow.__proto__ === Function.prototype);
console.log(yue.getQw.__proto__ === Function.prototype);

//sun.__proto__ = null;
sun.getAge = function(){
    return this.age + 2;

}
console.log(sun.getAge());

Function.prototype.__proto__. g = function(){
    return g + 1;
}
console.log(sun.g(1))