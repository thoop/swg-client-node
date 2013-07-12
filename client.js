var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = new Buffer('00010000000273da58b0000001f0', 'hex');

client.send(message, 0, message.length, 44453, '192.168.1.6');
client.on('message', function(buffer, requestInfo) {
    console.log('Received message ' + buffer.toString('hex'));
});