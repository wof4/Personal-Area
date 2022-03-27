const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String  },
    telegram: { type: String, },
});

module.exports = model('Contact', schema)

