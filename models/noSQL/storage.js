const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url: { type: String, required: true },
        fileName: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('Storage', StorageSchema);