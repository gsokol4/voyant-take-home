const crudProcesses = require("./src/backend/controller/crudProcesses")
const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  console.log('hey I am create pages is running')
  console.log(crudProcesses.getAll())
}