module.exports = function(application){


application.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

//ROTA POST FORM ADD NOTICIA    
application.post('/noticias/salvar', function(req, res){

    //Variavel recupera o post pelo paramento "req" e utiliza
    //o "body"(bodyParse) do express para carregar os dados
    var noticia = req.body;

    //res.send(noticias);

    //SALVA NOTICIA
    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function(error, result){
        res.redirect("/noticias");            
    });  

});

}
    