var mongoose = require('mongoose'),
    _ = require('underscore'),
    Project = mongoose.model('Project'),
    Ticket = mongoose.model('Ticket'),
    ObjectId = mongoose.Types.ObjectId,
    User = mongoose.model('User'),
    pc = {};

pc.create = function(req, res, next) {
    var project = new Project(req.body);
    project.managedBy = new ObjectId('55ca35490b8aadab1c3fb9a7');
    project.save(function(err, projectD) {
        if (err) {
            return next(err);
        }
        return res.jsonp(projectD).status(200);
    });
};

pc.update = function(req, res) {
    if (req.err) {
        res.send(req.err).status(500);
    }

    var project = _.extend(req.project, req.body);
    /*for(var i=0;i<project.members.length;i++){
        project.members[i] = 
    }*/
    console.log(req.project);
    project.save(function(err, projectD) {
        if (err) {
            res.send(req.err).status(500);
        }
        res.send(projectD).status(200);
    });
}


pc.show = function(req, res) {
    if (req.err) {
        res.send(req.err).status(500);
    }
    console.log(req.project);
    res.send(req.project).status(200);
}

pc.getProjectById = function(req, res, next, id) {

    /* Project.find()
         .populate('members.')
         .exec(
         function(err, project) {
             if (err) {
                 req.err = err;
                 console.log('error', err);
                 next()
             }
             req.project = project;
             next();
         });*/
    Project.findOne({
            '_id': id
        })
        .populate('managedBy', 'firstname _id')
        .populate('leadBy', 'firstname _id')
        .populate('members', 'firstname lastname')
        //.populate('members')
        /*.populate({
          path: 'members',
          select: 'firstname'
        })*/
        .exec(
            function(err, project) {
                if (err) {
                    req.err = err;
                    console.log('error', err);
                    next()
                }
                req.project = project;
                next();
            });
};

pc.getProjects = function(req, res) {

    Project.find({})
        .populate('managedBy', 'firstname _id')
        //.populate('members', 'firstname lastname')
        //.populate('members')
        .populate({
            path: 'members',
            select: 'firstname lastname'
        })
        .exec(
            function(err, projects) {
                if (err) {
                    console.log('error', err);
                }
                return res.jsonp(projects).status(200);
            });
};

module.exports = pc;

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
