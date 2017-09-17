/**
 * 2017-9-17  sunzhiyue
 */
//除法
function div(x){
    return function (y){
        return x / y;
    }
}
var x2 = div(2);
console.log(x2(4));


//乘法
function mul(x){
    return function (y){
        return x * y;
    }
}
var x3 = mul(3);
console.log(x3(5));

var i = 1;
function b(){
    
    var a = {
        age: i++
    };
    return a
    
};

console.log(b(), b(), b(), b());


var func = function (g){
    var i = 1;
    return function(){
        var obj1 = {
            age1: i
        };

        i = i + g;
        return obj1;
    };
    
};
var f = func(1);
console.log(f(), f(), f(), f(), f());

