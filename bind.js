/**
 * 2017-9-18   sunzhiyue
 */
var a = ['c'];
function fun(b){
     return this.name = ['asd']
}
console.log(fun.apply(a,[2]),a);


var b = fun.bind()