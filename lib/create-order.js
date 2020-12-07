function createOrder({ client, cartData }) {
  return client.fetch({
    uri: `/order`,
    method: "POST",
    body: cartData,
  });
}

module.exports = createOrder;
