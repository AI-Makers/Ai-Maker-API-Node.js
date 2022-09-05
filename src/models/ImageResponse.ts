const con = require('@db/connection');

const dataSchema = new con.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = con.model('Data', dataSchema)