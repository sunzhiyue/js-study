/**
 * 2017-9-18   sunzhiyue
 */
var arr1 = [];
for(var k = 0; k < 9; k++){
    arr1 = arr1 + ` \t ${k + 1}`;
};
console.log(arr1);
for(var i = 1; i <= 9; i++){
    var arr = [''];
    for(var j = 1;j <= i; j++){
        arr.push(`${j * i}\t`);
    };
    arr = `${i}\t` + arr
     console.log(arr);
};
console.log('-----------------------------------------------------------------------------')
console.log('\t1\t2\t3\t4\t5\t6\t7\t8\t9')
for(var q = 1; q <=9; q++){
    var str = '';
    for (var w = 1;w <= q; w++){
        str = str + `${q * w}\t`
    };  
    str = `${q}\t` + str;
    console.log(str);
}
