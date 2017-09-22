/**
 * 2017-9-22  sunzhiyue
 */
const animal = require('./animal');
function mammals(){
    
    };
    mammals.prototype = {
        v: 'viviparity',
        cd: function(){
            console.log('cd')
        }
    }
    mammals.prototype.__proto__ = animal.prototype;
    module.exports = mammals;