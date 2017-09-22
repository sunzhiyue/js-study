/**
 * 2017-9-22  sunzhiyue
 */
const poultry = require('./poultry')
function chicken (){
    
    };
    chicken.prototype = {
        l: 'land'
    }
    chicken.prototype.__proto__ = poultry.prototype;
    
    
module.exports = chicken;