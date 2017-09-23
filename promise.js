/**
 * 2017-9-23  sunzhiyue
 */
function asyncFunction() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Async Hello world');
      },1000);
    });
  }
  
  asyncFunction().then(function (value) {
    console.log(`1-${value}`);
    return value;
  }).then(function (value) {
    console.log(`2-${value}`);
    return{
        value: value,
        age: 2
    }
  }).then(function(value){
      console.log(`3-${value.value} - ${ value.age }`);
      console.log(a);
  }).catch(function(error){
      console.log(`catch-${error}`)
      return 'hello';
  }).then(function(v){
      console.log(`4-${v}`)
  })

  var readFileAsync = function(name){
      return new Promise(function(resolve, reject){
        fs.readFileAsync(name, function(err,data){
            if(err){
                resolve(data);
            }
        });
      })
  }

