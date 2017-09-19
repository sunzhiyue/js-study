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


var arr = [1, 2, 3, 4, 5]
console.log(typeof arr);
var str = 'sun';
console.log(typeof str);
