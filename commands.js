#!/usr/bin/env node
const program = require('commander')
const {prompt} = require('inquirer')
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
} =  require('./index')

//Customer qs
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer first name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer last name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer phone number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer email'
  }
]
const { args } = require('commander')

program.version('1.0.0').description('client management system')

program.command('add')
    .alias('a')
    .description('add a customer')
    .action(async () => {
      try {
        let answers = await prompt(questions)
        await addCustomer(answers)
      } catch (error) {
        
      }
      // prompt(questions).then(answers => addCustomer(answers))
    })

program
  .command('find <name>')
  .alias('f')
  .description('find a customer')
  .action(name => findCustomer(name))

  program.command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action(async (_id) => {
      try {
        let answers = await prompt(questions)
        await updateCustomer(_id, answers)
      } catch (error) {
        console.error(error)
      }
    })
  program.command('remove <_id>')
    .alias('r')
    .description('remove a customer')
    .action(async _id => {
      try {
        await removeCustomer(_id)
      } catch (error) {
        console.error(error)
      }
    

    })
  program.command('listall')
    .alias('l')
    .description('list all customers')
    .action(async ()=> {
      try {
        await listCustomers()
      } catch (error) {
        console.error(error)
      }
    })

program.parse(process.argv)