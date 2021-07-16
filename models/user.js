const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

        user_name: {
            type: String,
        },
        email: {
            type:String,
            default:'',
        },
        password : {
            type:String,
        }

    },
    { collection: 'user' },
    { timestamps: true },
);

module.exports = mongoose.model('user', userSchema);