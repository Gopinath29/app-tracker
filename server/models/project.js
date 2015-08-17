var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    leadBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    managedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Project', ProjectSchema);
