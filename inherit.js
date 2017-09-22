/**
 * 2017-9-22  sunzhiyue
 */
/*function animal(){
};
animal.prototype.species = 'mammal';
function cat(name){
    animal.apply(this, arguments);
    this.name  = name;
}
var c = new cat('a')
console.log(c);
cat.species = 'bird'
console.log(animal.prototype.species)*/
 

function animal(){
    this.species = 'animal';
};
function cat(name, color){
    animal.apply(this, arguments)
    this.name = mao;
    this.color = yellow;
};


cat.prototype = animal.prototype;
cat.prototype.constructor = cat;

animal.prototype.species = 'animal';

var F = function(){};
F.prototype = animal.prototype;
cat.prototype = new F();
cat.prototype.constructor = cat;

  

