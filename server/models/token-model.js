const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
    ip: { type: String, required: true },
    user: { type: Schema.Types.ObjestId, ref: 'User' },
    refreshToken: { type: String, required: true },
})

module.exports = model('Token', UserSchema)