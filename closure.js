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