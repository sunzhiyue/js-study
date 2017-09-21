/**
 * 2017-9-15   sunzhiyue
 */

var device = ['/dev/conlose','/dev/dis' ];

function open(dev){
    for(var n = 0; n < driver.length; n++){
       if (driver[n].type === dev){
        driver[n].open();}
        return n;
        
    }
    
}

function read(fd){

    return driver[fd].read() ;
}

function write(fd,conlose){
    return driver[fd].write(conlose) ;
}

function close(fd){
    return driver[fd].close() ;
}

var driver =[{
    type : '/dev/conlose',
    open : function(){
        console.log('open')

    },

    write : function(conlose){
        console.log(`${conlose}`)
    },

    read : function(){
        console.log('read')
    },

    close : function(){
        console.log('close')

    }

}];

var driver =[{
    type : '/dev/display',
    open : function(){
        console.log('open')

    },

    write : function(conlose){
         console.log(`${conlose}`)
    },

    read : function(){
        console.log('read')
    },

    close : function(){
        console.log('close')

    }

}];

var fd = open('/dev/console');
write(fd, 'hi');
read(fd);
close(fd);

 fd = open('/dev/dis');
write(fd, 'hello');
//read(fd);
close(fd);
