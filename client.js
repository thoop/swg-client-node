var swg = require('swg')

var app = swg({
    verbose: true
});

var connectionId = '58b026ca';

app.on('0002', function(req, res) {
	app.crcSeed = req.packet.crcSeed;
	app.crcLength = parseInt(req.packet.crcLength, 16);
	app.useCompression = parseInt(req.packet.useCompression, 16);
	app.seedSize = parseInt(req.packet.seedSize, 16);

	res.send('000900000400961F13410800757365726E616D65080070617373776F72640E0032303035303430382D31383A3030');
});

app.on('0009', function(req, res) {
	console.log(req.packet);
});

//send our connection id to the server so we can get back some info
app.send('000100000002' + connectionId + '000001f0', 44453, '127.0.0.1');


// app.send('000900000400961F13410800757365726E616D65080070617373776F72640E0032303035303430382D31383A3030288D', 44453, '127.0.0.1');
//0007BFB90000000000000000000000000000000000000000000000000000000200000000000000017571
//000900000400961F13410800757365726E616D65080070617373776F72640E0032303035303430382D31383A30302855

