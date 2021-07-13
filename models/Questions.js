const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema(
    {
        Sheet_name: {
            type: String,
        },
        ques_name: {
            type: String,
        },
        link: {
            type: String,
        },
        date: {
            type: Date,
        },
        status: {
            type: Boolean,
            default:false,
        },
        topic: {
            type:String,
        }
        
    },
    { collection: 'Questions' },
    { timestamps: true },
);

module.exports = mongoose.model('Questions', QuestionsSchema);





