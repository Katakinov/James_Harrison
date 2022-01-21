const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userPersonalData: [{ type: Types.ObjectId, ref: 'PersonalData' }]
})

module.exports = model('User', schema)