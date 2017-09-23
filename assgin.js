/**
 * 2017-9-16 sunzhiyue
 */
var o = Object.create(null, {
    foo: {
        enumerable: false,
        value: 'hello'
    },
    bar:{
        enumerable: true,
        value: 'yi'
    }
});
var obj = {};
Object.assign(obj, o);
console.log(o, obj);
console.log(o.foo, o.bar);