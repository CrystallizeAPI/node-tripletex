function getVatTypes({ client }) {
  return client.fetch({
    uri: `/ledger/vatType`,
    method: "GET",
  });
}

module.exports = getVatTypes;
