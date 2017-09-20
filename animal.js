/**
 * 2017 - 9 -20 sunzhiyue
 */
 function animal(){

};
animal.prototype = {
    m: 'move',
    b: 'breath'
}

function poultry(){

};
poultry.prototype = {
    s: 'spawn'
}
poultry.prototype.__proto__ = animal.prototype;
function mammals(){

};
mammals.prototype = {
    v: 'viviparity'
}
mammals.prototype.__proto__ = animal.prototype;

function fly (){

};
fly.prototype = {
    sk: 'sky'
}
fly.prototype.__proto__ = poultry.prototype;
function nofly (){

};
nofly.prototype = {
    l: 'land'
}
nofly.prototype.__proto__ = poultry.prototype;
function run (){
    console.log(run.prototype)
};
run.prototype = {
    le: 'leg'
}
run.prototype.__proto__ = mammals.prototype;
function swim(){

};
swim.prototype = {
    w: 'water'
}
swim.prototype.__proto__ = mammals.prototype
var dove = Object.create(fly.prototype,{
    name:{
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'dove1'
    },
    age:{
        enumerable: false,
        writable: true,
        configurable: true,
        value: 1
    }
})
var chicken = new nofly();
var dog = new run();
var dolphin = new swim();
console.log(dove.sk, dove.l, dove.name);
console.log(chicken.l, chicken.m);
console.log(dog.r, dog.b, dog.le);
console.log(dolphin.s, dolphin.w);