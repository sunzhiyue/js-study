/**
 * 2017-9-17  sunzhiyue
 */
function div(x){
    return function (y){
        return x / y;
    }
}
var x2 = div(2);
console.log(x2(4));
