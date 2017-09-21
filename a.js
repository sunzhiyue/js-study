/**
 * 2017-9-16   sunzhiyue
 */
var b = function(){

};
b.arr = [1, 2, 3, 4, 5];
b.obj = {
    name : 'wan',
    age : 18,
    car : true
}
b.fun = function(){
    console.log('fun');
}

Object.defineProperty(b,'len',{
    enumerable: true,
    configurable: false,
    get: function() { return this.arr.length; }
}

)
b.arr.length = 10;
console.log(b.len);
console.log(b.obj.len);
