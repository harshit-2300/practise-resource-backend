const mongoose = require('mongoose');

const SheetsSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
        },
        
    },
    { collection: 'Sheets' },
    { timestamps: true },
);

module.exports = mongoose.model('Sheets', SheetsSchema);