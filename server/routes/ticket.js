 var ticket = require('./../models/ticket.js');

 module.exports = function(app) {

/*
     var article = require('../controllers/articleController');
     app.route('/api/articles')
         .post(auth.requiresLogin,article.create)
         .get(auth.requiresLogin, article.getArticles);
     app.route('/api/articles/:articleId')
         .get(article.show)
         .put(article.update);
     app.param('articleId', article.getArticleById);*/

     var ticket = require('../controllers/ticketController');


      app.route('/api/ticket')
    .post(ticket.create)
    .get(ticket.getTickets);


     /*app.get('/api/login', function(req, res) {
         res.render('login', {
             user: req.user
         });
     });

     app.route('/api/auth/users')
         .post(user.create);

     app.route('/api/auth/session')
         .get(auth.requiresLogin, user.session)
         .post(user.login)
         .delete(user.logout)
*/
 };
