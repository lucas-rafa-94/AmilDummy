module.exports = function(app) {

  var https = require('https');
  var responseApex = ''
  var response = {
    dummy: {
      codResponse: "ok"
    }
  };

  app.post('/amilDummy/post', function(req, res) {
    console.log(JSON.stringify(req.body));
    res.send(response);
  });


  app.post('/amilDummy/iti003', function(req, res) {
    console.log(JSON.stringify(req.body));
    res.send(response);
  });

  app.get('/amilDummy/apex', function(req, response) {
    console.log(JSON.stringify(req.body));

    var options = {
      host: '129.144.158.159',
      port: 443,
      path: '/ords/parceiros/dadosparceiros/rest/busca-parceiro/Parceiro%20BLABLA91BLA92BLA93BLA94BLA95',
      method: 'GET'
    };

    var req = https.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        responseApex = responseApex +  chunk;
      });
      

    });

    req.end();
    response.send(responseApex)
  });
};
