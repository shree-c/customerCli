const mangoose = require('mongoose')
//map global promise
mangoose.Promise = global.Promise
const db = mangoose.connect('mongodb://localhost:27017/customercli', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Customer = require('./models/customer')

//add customer
const addCustomer = (customer)=> {
  Customer.create(customer).then(customer => {
    console.info('new customer added')
  }).catch(err => console.log(`err from mongoose ${err}`))
}

//find customer
const findCustomer = (name)=> {
  const search = new RegExp(name, 'i')
  Customer.find({$or: [{firstname: search}, {lastname: search}]}).then(customer => {
    console.info(customer)
    console.info(`${customer.length} match`)
  }).catch(err => console.info(`{err}: from findCustomer`))
}
//update customer
const updateCustomer = (_id, customer) => {
  Customer.updateOne({_id}, customer).then((customer) => {
    console.info('customer updated')
  }).catch(err => console.info(`{err}: from updateCustomer`))
}
//remove customer 
const removeCustomer = (_id) => {
  Customer.deleteOne({_id}).then(customer => {
    console.info('customer removed')
  }).catch(err => console.info(`${err}: from removeCustomer`))
}
//list customer
const listCustomers = () => {
  Customer.find({}).then(customers => {
    console.info(customers)
    console.info(`${customers.length} match`)
  }).catch(err => console.info(`{err}: from listCustomer`))
}
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}