# node-tripletex

Node Tripletex SDK for easy Tripletex integration in Node.JS. Generic Tripletex Node integration with specific support for the [Crystallize headless ecommerce service](https://crystallize.com/).

Crystallize enables you to build your next-gen e-commerce business by the help of [Fast GraphQL API Service](https://crystallize.com/product/graphql-commerce-api) backed by super structured [Product Information Management (PIM)](https://crystallize.com/product/product-information-management)

You can view the required body models documented in [Tripletex documentation](https://tripletex.no/v2-docs/#/)

## Install

```
yarn add @crystallize/node-tripletex
```

## Usage

### Initiate the client<br/>

```
const client = new TripletexClient({
    testDrive: true,
    consumerToken: "MY_TRIPLETEX_CONSUMER_TOKEN",
    employeeToken: "MY_TRIPLETEX_EMPOLOYEE_TOKEN"
  });
```

### Create an Access Token<br/>

```
await client.getAccessToken();
```

### Fetch all Inventories<br/>

```
await client.getInventories();
```

### Get all VAT Types<br/>

```
await client.getVatTypes();
```

### Create an Order<br/>

```
await client.createOrder(cartData);
```

### Create an OrderLine<br/>

```
await client.createOrderLine(orderLineData);
```

### Create a Customer<br/>

```
await client.createCustomer(customerData);
```
