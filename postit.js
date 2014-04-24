var http = require('http');
var url = require('url');

//-----------------------------------------------------------
// Class Definition
//-----------------------------------------------------------
function PostIt(uri, encoding) {
	this.init(uri);
    this.encoding = encoding || 'none';
}

var p = PostIt.prototype;

//-----------------------------------------------------------
// Init
//-----------------------------------------------------------
p.init = function(uri) {
	this.urlobj  = url.parse(uri);
};

//-----------------------------------------------------------
// Post
//-----------------------------------------------------------
p.post = function(jsonmessage) {
    var jsonString = JSON.stringify(jsonmessage);

    var headers = {
      'Content-Type': 'application/json',
      'Content-Length': (this.encoding === 'none') ? jsonString.length
                                                   : Buffer.byteLength(jsonString, this.encoding)
    };

    var options = {
      host: this.urlobj.hostname,
      port: this.urlobj.port,
      path: this.urlobj.path,
      method: 'POST',
      headers: headers
    };
	
    // Setup the request, we are ignoring responses
    var req = http.request(options);

    req.on('error', function(e) {
	    this.lastError = e;
    });

    req.write(jsonString);
    req.end();
};

//-----------------------------------------------------------
// Exports - Class Constructor
//-----------------------------------------------------------
module.exports = PostIt;








