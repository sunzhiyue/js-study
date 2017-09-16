/**
 * 2017-9-14  sunzhiyue
 */

var obj = {
    a: true,

    b: 1,

    da: function(){
      console.log( `a =>${ this.a },b =>${this.b},d =>${this.da}`);
    }
    
};

obj.da(); 

var o = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello' 
    },
    bar: {
        configurable: false,
        get: function() {return 10;},
        set: function(value){
            console.log('Setting `o.bar` to', value);
        }
    }
});
o.name = 1;
console.log(Object.keys(o));
console.log(`${typeof o} is type`);
console.log(Object.getPrototypeOf(o));
console.log(Object.getOwnPropertyDescriptor(o,'foo'))
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o,'bar')))
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o,'foo')))

var arr = ['a', 'b', 'c'];
arr['name'] = 'sunzhiyue';
arr.age = 22;
console.log(Object.keys(arr));
console.log(arr[0]);
console.log(arr.name);
console.log(`${typeof arr} is type`);
console.log(Object.getPrototypeOf(arr));

var fun = function (){
   console.log('annn');
};

fun.age = 23;
console.log(Object.keys(fun));
console.log(fun.age);
fun()
console.log(`${typeof fun} is type`);
console.log(Object.getPrototypeOf(fun));