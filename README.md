# Food Ordering App - Backend


## Backend Folder Structure

```
/backend
├── config
│   ├── db.js
│
├── controllers
│   ├── authController.js
│   ├── menuController.js
│   ├── orderController.js
│   └── restaurantController.js
├── middlewares
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models
│   ├── User.js
│   ├── Menu.js
│   ├── Order.js
│   └── Restaurant.js
├── routes
│   ├── authRoutes.js
│   ├── menuRoutes.js
│   ├── orderRoutes.js
│   └── restaurantRoutes.js
├── utils
│   └── helpers.js
├── .env
├── index.js
└── server.js
```
## Import Points

To run the backend server, ensure you have the following dependencies installed:

- Node.js
- Express.js
- Mongoose
- JSON Web Token (JWT)
- dotenv

You can install these dependencies using npm:

```bash
npm install express mongoose jsonwebtoken dotenv
```

Make sure to configure your `.env` file with the necessary environment variables such as database connection string and JWT secret.

## Additional Points

- Integrated third-party payment gateways for seamless transaction processing.
- Implemented real-time order tracking using WebSockets.