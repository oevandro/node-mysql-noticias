module.exports = function(app){  
    
       app.get('/noticia', function(req, res){
       
        var connection = app.config.dbConnection();
           
        var noticiasModel = application.app.models.noticiasModel;

        
        noticiasModel.getNoticia(connection, function(error, result){
            res.render("noticias/noticia", {noticias : result});            
        });   
   
       });
   
   }