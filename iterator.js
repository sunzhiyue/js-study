/**
 * 2017-9-14   sunzhiyue
 */
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(ele){
    console.log(ele);

});

console.log(arr.map(function(ele){
    return ele * 3;
}));

console.log(arr.filter(function(q){
    return q < 4;
}));

console.log(arr.reduce(function(w,e){
    return w - e;
}));

console.log(arr.every(function(i){
    return i <= 0;
}))

console.log(arr.some(function(o){
    return o > 5;
}))
