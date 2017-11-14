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

  app.get('/ords/parceiros/dadosparceiros/rest/busca-parceiro/:parceiro', function(req, response) {
    var bodyParceiro = req.params.parceiro;
    console.log(JSON.stringify(bodyParceiro));
    var options = {
      host: '129.144.158.159',
      port: 443,
      path: '/ords/parceiros/dadosparceiros/rest/busca-parceiro/Parceiro%20' + bodyParceiro,
      method: 'GET'
    };

    var req = https.request(options, function(res) {
      res.on('data', function(chunk) {
        responseApex = responseApex +  chunk;
      });
    });
    req.end();

    response.send(responseApex)
  });

  app.get('/ords/parceiros/dadosparceiros/rest/busca-parceiro/:parceiro', function(req, responseParceiros) {
    
    var bodyParceiro = req.params.parceiro;
    console.log(bodyParceiro)
    var status = 0;
    
    var options = {
      host: '129.144.158.159',
      port: 443,
      path: '/ords/parceiros/dadosparceiros/rest/registro-utilizado/Parceiro%20' + bodyParceiro,
      method: 'GET'
    };

    var req = https.request(options, function(res) {
      res.on('data', function(chunk) {
        responseApex = responseApex +  chunk;
        status = res.statusCode;
      });
    });
    req.end();
    if(status == 200){
    	responseParceiros.send(response);
    }else{
    	responseParceiros.send(response);
    }
   });
};
