module.exports = function(app) {

    var response = {
            dummy:{
                codResponse: "ok"
            }
        };

    app.post('/amilDummy/post', function(req, res) {
          console.log(JSON.stringify(req.body));
          res.send(response);
    });
};