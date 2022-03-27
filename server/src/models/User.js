const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
    password: { type: String, required: true, unique: true },
});

module.exports = model('User', schema)

