/**
 * 2017-9-22  sunzhiyue
 */
const mammals = require('./mammals');
function dolphin(){
    
    };
    dolphin.prototype = {
        w: 'water'
    }
    dolphin.prototype.__proto__ = mammals.prototype;
    
    
module.exports = dolphin;
