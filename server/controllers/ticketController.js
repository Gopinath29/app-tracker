var mongoose = require('mongoose'),
    Ticket = mongoose.model('Ticket'),
    ObjectId = mongoose.Types.ObjectId,
    User = mongoose.model('User');

exports.create = function(req, res, next) {
    var ticket = new Ticket(req.body);
    User.find({
        '_id': new ObjectId('55ca35490b8aadab1c3fb9a7')
    }, function(err, user) {
        if (err) {
            console.log('error', err);
        }
        ticket.createdBy = new ObjectId('55ca35490b8aadab1c3fb9a7');
        ticket.save(function(err, article) {
            if (err) {
                return next(err);
            }
            console.log('after save');
            return res.jsonp(ticket).status(200);
        });
        console.log('user', user);
    });

    //ticket.author = req.user;

};

exports.getTickets = function(req, res) {

    Ticket.find({}).populate('createdBy', 'firstname _id').exec(
        function(err, tickets) {
            if (err) {
                console.log('error', err);
            }
            console.log('tickets', tickets);
            return res.jsonp(tickets).status(200);
        });
};


/*exports.update = function(req, res) {
    var article = req.article;
    article = _.extend(article, req.body);
    article.save(function(err, article) {
        if (err) {
            return res.json(400, err);
        }
        return res.jsonp(article).status(200);
    });
}*/

/*exports.show = function(req, res) {
    return res.jsonp(req.article).status(200);
};

exports.getArticles = function(req, res) {
    Article.find({
        "author": req.user._id
    }, function(err, articles) {
        if (err) {
            return res.jsonp(500, {
                error: 'Error while fetching articles'
            });
        }
        return res.jsonp(articles).status(200);
    })
};

exports.getArticleById = function(req, res, next, id) {
    Article.findOne({
        "_id": id
    }, function(err, article) {
        if (err) {
            return res.jsonp(500, {
                error: 'Error while fetching article'
            });
        }
        req.article = article;
        next();

    })
};
*/
