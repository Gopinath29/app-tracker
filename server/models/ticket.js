var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var validateTicketType = function(value) {
    return (value == 'bug' || value == 'feature');
};

var validatePriority = function(value) {
    return (value == 'p1' || value == 'p2' || value == 'p3' || value == 'p4');
};

var validateStatus = function(){
    return (value == 'new' || value == 'opened' || value == 'closed' || value == 'resolved');
};

var TicketSchema = new Schema({
    type: {
        type: String,
        required: true,
        validate: [validateTicketType, 'Ticket type is not as expected']
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
     },
     priority: {
        type: String,
        required: true,
        validate: [validateTicketType, 'Ticket priority is not as expected']
     },
     createdBy: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    assignee: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        required: true,
        default: 'New',
        validate: [validateStatus, 'Ticket status is not as expected']
    },
    lastModified: {
       type: Date,
       default: Date.now    
    },
    screenShot: {
        type: [Schema.ObjectId],
        ref: 'Screen'
    },
    discussion: {
        type: [Schema.ObjectId],
        ref: 'Discussion'
    }
});


module.exports = mongoose.model('Ticket', TicketSchema);
