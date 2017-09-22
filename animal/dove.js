/**
 * 2017-9-22  sunzhiyue
 */
const poultry = require('./poultry')
function dove (){
    
    };
    dove.prototype = {
        sk: 'sky'
    }
    dove.prototype.__proto__ = poultry.prototype;

    
    module.exports = dove;