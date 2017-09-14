/**
 * 2017-9-14 sunzhiyue
 */
var x = 0;
for(var i = 1; i <= 10000; i++){
    if(i % 3 == 0){
    x = x + i;
    }
}
console.log(x);

var a = [1, 1];
for(var n = 2; n <= 100; n++){
    a[n]=a[n - 1] + a[n - 2];
}
console.log(a);

var b = [1, 1];
for(var n = 2; n <= 30; n++){
    b[n] = b[n - 1] + 2 * b[n - 2];
}
console.log(b);