function createOrderLine({ client, orderLineData }) {
  return client.fetch({
    uri: `/order/orderline`,
    method: "POST",
    body: orderLineData,
  });
}

module.exports = createOrderLine;
