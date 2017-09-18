/**
 * 2017-9-18   sunzhiyue
 */
var arr1 = [];
for(var k = 0; k < 9; k++){
    arr1 = arr1 + ` \t ${k + 1}`;
};
console.log(arr1);
for(var i = 1; i <= 9; i++){
    var arr = []
    
    for(var j = 1;j <= i; j++){
        arr = arr + ` ${j * i}\t`;
    };
    arr = `${i}\t` + arr
     console.log(arr);
};

