/**
 * 2017 - 9 -22 sunzhiyue
 */
 function animal(){

};
animal.prototype = {
    m: 'move',
    b: 'breath'
}


//console.log(typeof Object.create(Function,{}))
//console.log(typeof Object.create(Function.prototype,{}))
module.exports = animal;