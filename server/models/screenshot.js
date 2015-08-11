var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScreenShotSchema = new Schema({
/*     url: {
        type: String,
        required: true
    },
     createdTime: {
        type: Date,
        default: Date.now
     }*/
         firstname: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('ScreenShot', ScreenShotSchema);

var DiscussionSchema = new Schema({
     comment: {
        type: String,
        required: true
    },
    commentedBy: {
        type: Schema.ObjectId,
        required: true,
        ref: 'User'
     },
     createdTime: {
        type: Date,
        default: Date.now
     }
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
