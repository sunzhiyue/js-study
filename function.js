/**
 * 2017-9-17   sunzhiyue   
 */
function a (){

    return function b (x){
        return x * 2;

    };
};

b = a();
b.sp = 1;
var c = b(4);
var d = b(3);
console.log(c, d);
console.log(b.sp, d.sp);
console.log(a()(2))    //调用fun的方法

