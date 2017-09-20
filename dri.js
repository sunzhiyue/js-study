/**
 * 
 */
var device = ['/dev/conslole','/dev/display'];

function open(dev){
    for(var n = 0; n <= device.length ; n++){
        device[n].tpye === dev;
        driver[n].open();
        return n;

    }
}
function write(fd,conlose){
    return driver[fd].write(conlose)
}

function read(fd){
    return driver[fd].read()
}

function close(fd){
    return driver[fd].close()
}

var driver = [{
    tpye : '/dev/conslole',
    open : function(){
        console.log('kai');
    },
    read : function(){
        console.log('du')
    },
    write  : function(conlose){
        console.log(`${conlose}`)
    },
    close : function(){
        console.log('guan')
    }
}];
var fd = open('/dev/console');
write(fd,'content');
read(fd);
close(fd);