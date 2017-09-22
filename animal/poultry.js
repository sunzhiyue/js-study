/**
 * 2017-9-22  sunzhiyue
 */
const animal =  require('./animal')
function poultry(){
    
    };
    poultry.prototype = {
        s: 'spawn'
    }
    poultry.prototype.__proto__ = animal.prototype;
    module.exports = poultry;