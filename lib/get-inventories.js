function getInventories({ client }) {
  return client.fetch({
    uri: `/inventory`,
    method: "GET",
  });
}

module.exports = getInventories;
