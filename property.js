/**
 * 2017-9-14   sunzhiyue
 */
/*var o ={
    name: 'hello',
    age: 20,
    city: 'hangzhou',
};
for (var key in o){
    console.log(key, o[key]);
};*/

var o = Object.create(null, {
    foo: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'hello'
    }
});

var obj = Object.defineProperty(o, 'foo',{
    enumerable: true,
    writable: true,
    configurable: true,
    value:'hi'
})

console.log( obj);

var arr = [1, 2];
var obje = Object.defineProperty(arr,'length',{
    enumerable: true,
    writable: true,
    configurable: true,
    value: 1
}
)
var obje = Object.defineProperty(arr,  '4',{
    enumerable: true,
    writable: true,
    configurable: true,
    value: 128
}
)
console.log(arr)

var a = {
    n: 1,

}
console.log(a['0'])