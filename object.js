/**
 * 2017-9-14  sunzhiyue
 */

var obj = {
    a: true,

    b: 1,

    da: function(){
      console.log( `a =>${ this.a },b =>${this.b},d =>${this.da}`);
    }
    
};

obj.da();

