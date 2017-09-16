/**
 * 2017-9-16 sunzhiyue
 */
var o = Object.create(null, {
    foo: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        enumerable: false,
        writable: true,
        configurable: true,
        value:'hi'
    }
});
console.log(Object.entries(o));
var q = {
    n : 1,
    m : 2,
    b : 'tom'
}
console.log(Object.entries(q));