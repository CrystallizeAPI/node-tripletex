function createCustomer ({ client, customerData }) {

  return client.fetch({
    uri: `/customer`,
    method: 'POST',
    body: customerData
  })
}

module.exports = createCustomer
