var swg = require('swg')

var app = swg({
    verbose: true
});

app.on('0002', function(req, res) {
	console.log('in 0002');
});

app.send('00010000000273da58b0000001f0', 44453, '127.0.0.1');