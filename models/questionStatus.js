const mongoose = require('mongoose');

const questionStatusSchema = new mongoose.Schema(
    {

        user_id: {
            type: String,
        },
        questions: {
            type:Array,
            ques_id : {
                type:String
            },
            status:{
                type:Boolean,
                default:false,
            },
            date:{
                type: String,
                default:'',
            }

        },
        

    },
    { collection: 'questionStatus' },
    { timestamps: true },
);

module.exports = mongoose.model('questionStatus', questionStatusSchema);