# order-express

This is standalone express server built to demonstrate how some
backend APIs may be built outside of a Next.js context.

The full Next.js application can be found here:

[https://github.com/whatisagi/full-stack-order
](https://github.com/whatisagi/full-stack-order)

The decisions made in writing the app is explained here:

[order.pdf](https://github.com/user-attachments/files/16881939/order.pdf)


### Local development

Clone the repo and run

```
npm install
```

followed by

```
npm run dev
```

To run test:

```
npm run test
```


**Please note that we're not writing API test**

To check the API, visit `localhost:3000` and test it directly on the browser, for
example by visting `http://localhost:3000/api/products?date=2024-09-03`.
