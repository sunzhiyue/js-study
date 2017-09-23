/**
 * 2017-9-23  sunzhiyue
 */
var a = (app) => {
    this.a = '1';
    this.age = 2;
};
a();
console.log(this.a)
console.log(a.prototype);
console.log(a);
console.log(a.age);
/*var b = new a()
console.log(b);*/