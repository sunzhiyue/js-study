/**
 * 2017-9-22   sunzhiyue
 */
const mammals = require('./mammals')
function dog (){
    console.log(dog.prototype)
};
dog.prototype = {
    le: 'leg'
}
dog.prototype.__proto__ = mammals.prototype;

module.exports = dog;