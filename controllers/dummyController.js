module.exports = function(app) {

  var https = require('https');
  var queryResponse = '';
  var response = {
    dummy: {
      codResponse: "ok"
    }
  };

  app.post('/amilDummy/post', function(req, res) {
    console.log(JSON.stringify(req.body));
    res.send(response);
  });

  app.get('/amilDummy/post', function(req, res) {
    res.send(response);
  });


  app.get('/', function(req, res) {
    res.send(response);
  });


  app.post('/amilDummy/iti003', function(req, res) {
    console.log(JSON.stringify(req.body));
    res.send(response);
  });

  app.get('/ords/parceiros/dadosparceiros/rest/busca-parceiro/:parceiro', function(req, response) {
  	console.log(req.params.parceiro);
    var bodyParceiro = "";

    bodyParceiro = req.params.parceiro;

    var options = {
      host: '129.144.158.159',
      port: 443,
      path: '/ords/parceiros/dadosparceiros/rest/busca-parceiro/' + bodyParceiro,
      method: 'GET'
    };

    var req = https.request(options, function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body +=  chunk;
      });
      res.on('end', function(){
        queryResponse = JSON.parse(body);
        console.log("Got a response: ", queryResponse);
        response.setHeader('Content-type', 'application/json');
        response.send(queryResponse);
     });
    });
    req.end();

  });

  app.get('/ords/parceiros/dadosparceiros/rest/registro-utilizado/:id/proposta/:proposta/identificador/:identificador/nome/:nome/data-venda/:data/forma-pagamento/:pagamento', function(req, responseParceiros) {

    console.log(req.params)
    var status = 0;

    var options = {
      host: '129.144.158.159',
      port: 443,
      path: '/ords/parceiros/dadosparceiros/rest/registro-utilizado/'+req.params.id+'/proposta/'+req.params.proposta+'/identificador/'+req.params.identificador+'/nome/'+req.params.nome+'/data-venda/'+req.params.data+'/forma-pagamento/'+req.params.pagamento,
      method: 'GET'
    };

    var req = https.request(options, function(res) {
      status = res.statusCode;
    });
    req.end();
    if(status == 200){
    	responseParceiros.send(response);
    }else{
    	responseParceiros.send(response);
    }
   });
};
