const mongoose = require('mongoose');

const HitCountSchema = new mongoose.Schema(
    {
        Count: {
            type: Number,
        },
        
    },
    { collection: 'hitCount'},
    { timestamps: true },
);

module.exports = mongoose.model('HitCount', HitCountSchema);