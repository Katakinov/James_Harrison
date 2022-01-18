const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    birtday: {type: String, required: true},
    post: [{ type: Types.ObjectId, ref: 'Post' }]
})

module.exports = model('User', schema)