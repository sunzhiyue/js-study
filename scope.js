/**
 * 2017-9-18  sunzhiyue
 */
var obj = {
    a : 2,
    b : function(x){
        this.c = this.a + x;
        return this.c;
       
    },
        
 };
console.log('--------------');

 var d;
 if (obj.c < 0){
     console.log('f')
 } else {
     console.log('t',), d = 1 + obj.c
 };

for(var i = 0; i <= 10; i++){
    d = d + i;
};

var e = 90;
while (d > 0){
    d = d + e;
    e = e - 2;
};

switch(expc){
    case 1 , 2, 

}


console.log(obj.b(3), obj.c,d)
