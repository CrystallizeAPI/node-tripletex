const fetch = require("cross-fetch");
const ow = require("ow");
const getAccessToken = require("./lib/access-token");
const createOrder = require("./lib/create-order");
const getInventories = require("./lib/get-inventories");
const createOrderLine = require("./lib/create-order-line");
const createCustomer = require("./lib/create-customer");
const getVatTypes = require("./lib/get-vat-types");

const URL_LIVE = "https://tripletex.io/v2";
const URL_TEST = "https://api.tripletex.io/v2";

module.exports = class TripletexClient {
  constructor(config) {
    ow(config.consumerToken, ow.string);
    ow(config.employeeToken, ow.string);

    this.config = {
      ...config,
      baseUrl: config.testDrive ? URL_TEST : URL_LIVE,
    };
  }

  async fetch({ uri, body, method = "POST" }) {
    const { access_token } = await this.getAccessToken();

    try {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Basic " + Buffer.from("0" + ":" + access_token).toString("base64"),
        },
        method,
        body: JSON.stringify(body),
      };

      const response = await fetch(`${this.config.baseUrl}${uri}`, options);

      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getAccessToken() {
    return getAccessToken({ client: this });
  }

  getInventories() {
    return getInventories({ client: this });
  }

  getVatTypes() {
    return getVatTypes({ client: this });
  }

  createOrderLine(orderLineData) {
    return createOrderLine({ client: this, orderLineData });
  }

  createOrder(cartData) {
    return createOrder({ client: this, cartData });
  }

  createCustomer(customerData) {
    return createCustomer({ client: this, customerData });
  }
};
