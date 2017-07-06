var swg = require('swg')

var app = swg({
    verbose: true
});

var port = 44453;
var address = '127.0.0.1';

app.setDefault('port', port);
app.setDefault('address', address);

var connectionId = '58b026ca';

app.on('SOE_SESSION_REPLY', function(req, res) {
	app.setDefault('crcSeed', req.packet.crcSeed);
	app.setDefault('crcLength', req.packet.crcLength);
	app.setDefault('useCompression', !!req.packet.useCompression);
	app.setDefault('seedSize', req.packet.seedSize);

	res.sendPacket({
		name: 'LoginClientId',
		username: 'swganh0',
		password: 'swganh',
		version: '20050408-18:00'
	});
});

app.on('SOE_ACK_A', function(req, res) {
	console.log('ack', req.packet);
});

app.on('LoginClientToken', function(req, res) {
	console.log('received token', req.packet);
});


app.send({
	packet: {
		name: 'SOE_SESSION_REQUEST',
		crcLength: 2,
		connectionId: 1487939274,
		clientUDPSize: 496
	},
	port: port,
	address: address
});