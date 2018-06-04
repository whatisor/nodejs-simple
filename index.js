const express = require('express')
const app = express()

app.use('/', express.static('./public/'));
app.use('/data',function(_request,_response){
	console.log(_request);
	_response.json({ a: 1 });
})


var server = app.listen(8001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);
});
