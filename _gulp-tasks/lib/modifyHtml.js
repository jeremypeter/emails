/**
* Replace certain variables in html
* @author jeremypeter
*/

var es = require('event-stream');
var config = require('../configs/main');

function modifyHtml(){
  return es.map(function(file, cb){

    var html = file.contents.toString();
    
    html = config.modifyHtml(html);

    file.contents = new Buffer(html);
    
    cb(null, file);

  });
};

module.exports = modifyHtml;
