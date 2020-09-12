const mangoose = require('mongoose')

const customerSchema = mangoose.Schema({
  firstname : {type: String},
  lastname : {type: String},
  phone : {type: Number},
  email: {type: String}
})

module.exports = mangoose.model('Customer', customerSchema)