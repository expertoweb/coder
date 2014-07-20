exports.settings={};
//These are dynamically updated by the runtime
//settings.appname - the app id (folder) where your app is installed
//settings.viewpath - prefix to where your view html files are located
//settings.staticurl - base url path to static assets /static/apps/appname
//settings.appurl - base url path to this app /app/appname
//settings.device_name - name given to this coder by the user, Ie."Billy's Coder"
//settings.coder_owner - name of the user, Ie. "Suzie Q."
//settings.coder_color - hex css color given to this coder.

exports.get_routes = [
    { path:'/', handler:'index_handler' },
    { path:'/new', handler:'new_board' }
];

exports.post_routes = [
];

exports.index_handler = function( req, res ) {
    var tmplvars = {};
    tmplvars['static_url'] = exports.settings.staticurl;
    tmplvars['app_name'] = exports.settings.appname;
    tmplvars['app_url'] = exports.settings.appurl;
    tmplvars['device_name'] = exports.settings.device_name;

    res.render( exports.settings.viewpath + '/index', tmplvars );
};

exports.new_board = function( req, res ) {
    var values=[];
    for (var i=0; i < 81; i++){
        values[i] = Math.floor((Math.random() * 9) + 1);
    }
              
    //Find duplicates by row and column, remove them
    for (var i=0; i < 9; i++){
        var sampleh = new Array();
        var samplev = new Array();
        for (var j=0; j < 9; j++){
            var val = values[i*9+j];
            var k = sampleh.indexOf(val);
            if (k !== -1){
                values[i*9+j] = "";
            }
            else {
                sampleh.push(values[i*9+j]);
            }
            // Vertical check
            var val = values[j*9+i];
            var k = samplev.indexOf(val);
            if (k !== -1){
                values[j*9+i] = "";
            }
            else {
                samplev.push(values[j*9+i]);
            }
        }    
    }

    var boxes=new Array();
    boxes[0]=new Array();
    boxes[0]=[values[0],values[1],values[2],values[9],values[10],values[11],
              values[18],values[19],values[20]];
    boxes[1]=new Array();
    boxes[1]=[values[27],values[28],values[29],values[36],values[37],values[38],
              values[45],values[46],values[47]];
    boxes[2]=new Array();
    boxes[2]=[values[54],values[55],values[56],values[63],values[64],values[65],
              values[72],values[73],values[74]];
    boxes[3]=new Array();
    boxes[3]=[values[3],values[4],values[5],values[12],values[13],values[14],
              values[21],values[22],values[23]];
    boxes[4]=new Array();
    boxes[4]=[values[30],values[31],values[32],values[39],values[40],values[41],
              values[48],values[49],values[50]];
    boxes[5]=new Array();
    boxes[5]=[values[57],values[58],values[59],values[66],values[67],values[68],
              values[75],values[76],values[77]];
    boxes[6]=new Array();
    boxes[6]=[values[6],values[7],values[8],values[15],values[16],values[17],
              values[22],values[23],values[24]];
    boxes[7]=new Array();
    boxes[7]=[values[33],values[34],values[35],values[42],values[43],values[44],
              values[51],values[52],values[53]];
    boxes[8]=new Array();
    boxes[8]=[values[58],values[59],values[60],values[69],values[70],values[71],
              values[78],values[79],values[80]];
    
    for (var i=0; i < 9; i++){
        var sampleb = new Array();
        for (var j=0; j < 9; j++){
            var val=boxes[i][j];
            var k = sampleb.indexOf(val);
            if (k !== -1){
                boxes[i][j] = "";
            }
            else {
                sampleb.push(boxes[i][j]);
            }
        }   
    }
    
    values[0]=boxes[0][0];
    values[1]=boxes[0][1];
    values[2]=boxes[0][2];
    values[9]=boxes[0][3];
    values[10]=boxes[0][4];
    values[11]=boxes[0][5];
    values[18]=boxes[0][6];
    values[19]=boxes[0][7];
    values[20]=boxes[0][8];

    values[27]=boxes[1][0];
    values[28]=boxes[1][1];
    values[29]=boxes[1][2];
    values[36]=boxes[1][3];
    values[37]=boxes[1][4];
    values[38]=boxes[1][5];
    values[45]=boxes[1][6];
    values[46]=boxes[1][7];
    values[47]=boxes[1][8];

    values[54]=boxes[2][0];
    values[55]=boxes[2][1];
    values[56]=boxes[2][2];
    values[63]=boxes[2][3];
    values[64]=boxes[2][4];
    values[65]=boxes[2][5];
    values[72]=boxes[2][6];
    values[73]=boxes[2][7];
    values[74]=boxes[2][8];

    values[3]=boxes[3][0];
    values[4]=boxes[3][1];
    values[5]=boxes[3][2];
    values[12]=boxes[3][3];
    values[13]=boxes[3][4];
    values[14]=boxes[3][5];
    values[21]=boxes[3][6];
    values[22]=boxes[3][7];
    values[23]=boxes[3][8];
  
    values[30]=boxes[4][0];
    values[31]=boxes[4][1];
    values[32]=boxes[4][2];
    values[39]=boxes[4][3];
    values[40]=boxes[4][4];
    values[41]=boxes[4][5];
    values[48]=boxes[4][6];
    values[49]=boxes[4][7];
    values[50]=boxes[4][8];

    values[57]=boxes[5][0];
    values[58]=boxes[5][1];
    values[59]=boxes[5][2];
    values[66]=boxes[5][3];
    values[67]=boxes[5][4];
    values[68]=boxes[5][5];
    values[75]=boxes[5][6];
    values[76]=boxes[5][7];
    values[77]=boxes[5][8];

    values[6]=boxes[6][0];
    values[7]=boxes[6][1];
    values[8]=boxes[6][2];
    values[15]=boxes[6][3];
    values[16]=boxes[6][4];
    values[17]=boxes[6][5];
    values[22]=boxes[6][6];
    values[23]=boxes[6][7];
    values[24]=boxes[6][8];
    
              
    values[33]=boxes[7][0];
    values[34]=boxes[7][1];
    values[35]=boxes[7][2];
    values[42]=boxes[7][3];
    values[43]=boxes[7][4];
    values[44]=boxes[7][5];
    values[51]=boxes[7][6];
    values[52]=boxes[7][7];
    values[53]=boxes[7][8];
  
              
    values[58]=boxes[8][0];
    values[59]=boxes[8][1];
    values[60]=boxes[8][2];
    values[69]=boxes[8][3];
    values[70]=boxes[8][4];
    values[71]=boxes[8][5];
    values[78]=boxes[8][6];
    values[79]=boxes[8][7];
    values[80]=boxes[8][8];
    
    /*
    var sys = require('sys')
    var exec = require('child_process').exec;
    var child;
     
    child = exec("echo '1'", function (error, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    
    });
    
    var fs = require('fs');
    fs.writeFile('./file2.txt', 'Hola Mundo', function(err) {
    if( err ){
        console.log( err );
    }
    else{
        console.log('Se ha escrito correctamente');
    }
    });*/
    
    res.json({values: values})
};

exports.on_destroy = function() {
};