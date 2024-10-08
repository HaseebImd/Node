const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory:
        [{ time: { type: Number } }]

},
    { timestamps: true }
);

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;